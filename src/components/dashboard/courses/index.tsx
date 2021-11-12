import { Stack, Skeleton, Text } from '@chakra-ui/react'
import Actions from './Actions'
import CardCourse from './CardCourse'
import NoCourse from './NoCourse'
import WrapperCourses from './WrapperCourses'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseClient'
import useGlobal from '../../../store/useGlobal'


const Courses: React.FC = () => {

    const global = useGlobal(state => state)

    const [dataFiltered, setDataFiltered] = useState<IcourseDetails[] | null>(null)

    // SWR
    const fetcher = async () => {
        let { data: courses, error } = await supabase
            .from<IcourseDetails>('courses_io')
            .select('*')

        return courses
    }

    const response = useSWR('/courses', fetcher, {
        revalidateOnFocus: false,
    })

    // Setando o valor de cursos achado MODIFICAR POR QUERY AVANÇADA NO SUPABASE
    useEffect(() => {
        global.setCoursesLength(response.data?.length || 0)
    }, [response.data])

    useEffect(() => {
        let data = response.data

        let filter = data
            ?.filter(
                course => course.title?.toLowerCase()
                    .includes(global.searchText.toLowerCase()) || course.skills?.toLowerCase()
                        .includes(global.searchText.toLowerCase())
            ) || null

        setDataFiltered(filter)
    }, [global.searchText])

    return (
        <>
            <Actions />
            <WrapperCourses>
                {!response.data && (
                    <Stack width="100%">
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                    </Stack>
                )}

                {global.searchText === "" && response.data && response.data?.map(course => (
                    <CardCourse key={course.id} course={course} />
                ))}

                {global.searchText !== "" && dataFiltered && dataFiltered?.map(course => (
                    <CardCourse key={course.id} course={course} />
                ))}

                {response.data?.length === 0 &&
                    <NoCourse />
                }
            </WrapperCourses>
        </>
    )
}

export default Courses
