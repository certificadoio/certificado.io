import { Flex, Text, Image, Button, FormControl, FormErrorMessage, FormLabel, Input, Link as A } from '@chakra-ui/react'

import Link from 'next/link'
import { useState } from 'react'
import { theme } from '../../styles/theme'
import { supabase } from '../../utils/supabaseClient'

interface IProps {
    toggleForm: () => void
}

const initialError = {
    email: '',
}
const FormForgotPassword: React.FC<IProps> = ({ toggleForm }) => {

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState(initialError)

    const handleReset = async () => {
        if (!email || email === "") return setErrors({
            email: 'Por favor, preencha seu email'
        })

        let { data, error } = await supabase.auth.api.resetPasswordForEmail(email)

        if (error) console.error(error)

        return setErrors({
            email: 'As instruções para login foram enviadas para o seu email'
        })
    }

    return (
        <Flex
            flex="1"
            direction="column"
            align="center"
            justify="center"

            padding="0 25px"
        >

            <Image src="/assets/logo200.svg" alt="logo" width="200px" mb="40px" mt="-70px" />

            <Flex
                background="#fff"
                borderRadius="4px"
                width="100%"
                maxWidth="480px"

                direction="column"
            >
                <Flex
                    width="100%"
                    height="230px"
                    borderBottom="1px solid rgba(60, 89, 190, 0.08)"

                    align="center"
                    justify="center"
                    direction="column"
                >
                    <A
                        fontWeight="600"
                        fontSize="12px"
                        lineHeight="18px"
                        color={theme.blue300}
                        letterSpacing="1px"

                        onClick={toggleForm}
                    >
                        VOLTAR PARA O LOGIN
                    </A>
                    <Text
                        marginTop="12px"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="33px"
                    >
                        Recupere a sua senha
                    </Text>
                    <Text
                        maxWidth="360px"
                        textAlign="center"
                        fontWeight="500"
                        color="#666"
                        fontSize="14px"
                        lineHeight="21px"
                    >
                        Digite o seu endereço de email e enviaremos um email com as instruções necessárias para a criação de uma nova senha.
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    padding="30px"
                >
                    <FormControl
                        isInvalid={!!errors.email}
                        id="email"
                    >
                        <FormLabel

                            htmlFor="email"
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="16px"
                            color="#262626"
                        >
                            Email:
                        </FormLabel>
                        <Input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <Button
                        background={theme.blue500}
                        color="#fff"
                        marginTop="32px"

                        onClick={handleReset}

                        _hover={{
                            background: theme.blue300
                        }}
                    >
                        Enviar
                    </Button>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default FormForgotPassword