import { Container, Header, Form, Footer, FormForgotPassword, FormCadastrar } from '../components/login'

import { useState } from 'react'
import ModalCreatedNewUser from '../components/login/ModalCreatedNewUser'
import { NextPage } from 'next'

const Login: NextPage = () => {

    const [toggleFormForgot, setToggle] = useState(true)

    const toggleForm = () => setToggle(!toggleFormForgot)

    return (
        <>
            <Container>
                <Header />
                <FormCadastrar />
                <Footer />
            </Container>
            <ModalCreatedNewUser />
        </>
    )
}

export default Login