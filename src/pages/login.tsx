import { Container, Header, Form, Footer, FormForgotPassword } from '../components/login'

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import router from 'next/router'
import { NextPage } from 'next'

const Login: NextPage = () => {

    const [toggleFormForgot, setToggle] = useState(true)

    const toggleForm = () => setToggle(!toggleFormForgot)

    useEffect(() => {
        (async () => {
            const user = await supabase.auth.user()

            if (user?.id) return router.push('/')
        })()
    }, [])

    return (
        <Container>
            <Header />
            {toggleFormForgot && <Form toggleForm={toggleForm} />}
            {!toggleFormForgot && <FormForgotPassword toggleForm={toggleForm} />}
            <Footer />
        </Container>
    )
}

export default Login