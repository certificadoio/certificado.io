import router from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import useNewCourse from '../store/useNewCourse'

const AuthProvider: React.FC = ({ children }) => {

    const [showContent, setShowContent] = useState(false)
    const state = useNewCourse(state => state)

    const getUser = async () => {
        const user = await supabase.auth.user()

        if (!user?.id) return router.push('/login')

        if (JSON.stringify(user.user_metadata) !== "{}") {
            //usuário tem informações no meta data
            //Pegar o company name

            state.setCourseDetails({ ...state.courseDetails, company_name: user.user_metadata?.company })
        }

        setShowContent(true)
    }

    useEffect(() => {
        getUser()
    }, [])

    // console.log(state.courseDetails)
    return (
        <>
            {showContent &&
                <div>
                    {children}
                </div>
            }
        </>
    )
}

export default AuthProvider
