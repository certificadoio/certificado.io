import { Tr, Td, Text, Flex, Image, Box, Link as A } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import useGlobal from '../../../store/useGlobal'
import { supabase } from '../../../utils/supabaseClient'


interface IProps {
    data: {
        id: string,
        course_id: string,
        name: string,
        email: string,
        created_at: string,
        updated_at: string,
        theme_id: string,
        owner_id: string,
        id_view: string,
    }
}

const TableRow: React.FC<IProps> = ({ data }) => {

    const [courseTitle, setCourseTitle] = useState('')

    const global = useGlobal(state => state)
    const router = useRouter()

    const handleDelete = () => {
        global.toggleModalDeleteCertificate(data.id)
    }

    const handleEdit = () => {
        global.setIdToAction(data.id)
        router.push('/certificado')
    }

    const dateMap = data.created_at.substring(0, 10).split('-')
    const created_at = dateMap[2] + '/' + dateMap[1] + '/' + dateMap[0]

    // fetch course

    const fetcher = async () => {
        let { data: courses, error } = await supabase
            .from<IcourseDetails>('courses_io')
            .select('*')

        return courses
    }

    const response = useSWR('/courses', fetcher, {
        revalidateOnFocus: false,
    })

    const getCourseTitle = () => response.data?.map(course => {
        if (data.course_id === course.id) {
            return setCourseTitle(course.title)
        }
    })

    const handleLink = () => {
        router.push(`/c/${data.id_view}`)
    }

    useEffect(() => {
        getCourseTitle()
    }, [])

    return (
        <Tr>
            <Td>
                <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="rgba(25, 25, 25, 0.9)"
                >
                    {data.name}
                </Text>
                <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="rgba(25, 25, 25, 0.5)"
                >
                    {data.email}
                </Text>
            </Td>
            <Td>
                <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="rgba(25, 25, 25, 0.9)"
                >
                    {courseTitle}
                </Text>
            </Td>
            <Td display={["none", "none", "table-cell"]}>
                <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="rgba(25, 25, 25, 0.5)"
                >
                    {created_at}
                </Text>
            </Td>
            <Td display={["none", "table-cell", "table-cell"]}>
                <Flex justify="space-between">
                    <Box
                        cursor="pointer"
                        onClick={handleEdit}
                    >
                        <Image src="/assets/icons/edit.svg" alt="" />
                    </Box>
                    <A
                        href={`/c/${data.id_view}`}
                        target={"_blank"}
                    // cursor="pointer"
                    // onClick={handleLink}
                    >
                        <Image src="/assets/icons/link.svg" alt="" />
                    </A>
                    <Box
                        cursor="pointer"
                        onClick={handleDelete}
                    >
                        <Image src="/assets/icons/trash.svg" alt="" />
                    </Box>
                </Flex>
            </Td>
        </Tr>
    )
}

export default TableRow
