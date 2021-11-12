import { useEffect } from 'react'
import CourseDetails from './CourseDetails'
import CustomizeCertificate from './CustomizeCertificate'
import MenuBottom from './MenuBottom'
import SelectCertificate from './SelectCertificate'
import WrapperNewCourse from './WrapperNewCourse'

import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'

interface Course {
    title: string,
    description: string,
    urlCourse: string,
    workload: number,
    skills: string
}

const NewCourse: React.FC = () => {

    const newCourse = useNewCourse(state => state)

    const fetchCourse = async () => {
        let { data: courses, error } = await supabase
            .from('courses_io')
            .select("*")
            .eq('id', newCourse.idToAction)

        let course: Course | null = null

        courses?.forEach(each => {
            if (each.id === newCourse.idToAction) {
                course = each
            }
        })

        if (course) {
            newCourse.setCourseDetails(course)
        }

        // Pegar os detalhes do certificado e colocar nos inputs

        let response = await supabase
            .from('themes_io')
            .select("*")
            .eq('course_id', newCourse.idToAction)

        let certificate_theme: IThemeCertificate | null = null

        response.data?.forEach(each => {
            if (each.course_id === newCourse.idToAction) {
                certificate_theme = each
            }
        })

        if (certificate_theme) {
            newCourse.setThemeCertificate(certificate_theme)
        }
    }

    useEffect(() => {
        if (newCourse.editMode) {
            fetchCourse()
        }
    }, [])

    return (
        <WrapperNewCourse>

            {newCourse.progressCount === 0 && <CourseDetails />}
            {newCourse.progressCount === 1 && <SelectCertificate />}
            {newCourse.progressCount === 2 && <CustomizeCertificate />}

            <MenuBottom />

        </WrapperNewCourse>
    )
}

export default NewCourse