import router from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

const AuthProvider: React.FC = ({ children }) => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            const user = await supabase.auth.user()

            if (!user?.id) return router.push('/login')

            setShowContent(true)
        }

        getUser()
    }, [])

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
