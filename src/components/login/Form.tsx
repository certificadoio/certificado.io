import { Flex, Text, Image, Button, FormControl, FormLabel, Input, Link as A, FormErrorMessage } from '@chakra-ui/react'

import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import { theme } from '../../styles/theme'
import { supabase } from '../../utils/supabaseClient'

interface IProps {
    toggleForm: () => void
}

const initialError = {
    email: '',
    pass: '',
}

const Form: React.FC<IProps> = ({ toggleForm }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errors, setErrors] = useState(initialError)

    const handleSubmit = async () => {
        if (!email || !pass) return setErrors({
            email: 'Verifique o email digitado',
            pass: 'Verifique a senha digitada',
        })

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) return setErrors({
            email: 'Verifique o email digitado',
            pass: '',
        })

        let { user, error } = await supabase.auth.signIn({
            email: email,
            password: pass
        })

        if (error?.message === "Email not confirmed") {
            return setErrors({
                email: 'Confirme seu email antes de acessar sua conta!',
                pass: '',
            })
        }

        if (error?.message === "Invalid login credentials") {
            return setErrors({
                email: 'Verifique o email digitado',
                pass: 'Verifique a senha digitada',
            })
        }

        router.push('/')
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
                    height="140px"
                    borderBottom="1px solid rgba(60, 89, 190, 0.08)"

                    align="center"
                    justify="center"
                    direction="column"
                >
                    <Text
                        fontWeight="600"
                        fontSize="12px"
                        lineHeight="18px"
                        color="#8c8c8c"
                        letterSpacing="1px"
                    >
                        BEM VINDO DE VOLTA
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="33px"
                    >
                        Entre na sua conta
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    padding="30px"
                >
                    <FormControl
                        id="email"
                        isInvalid={!!errors.email}
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
                            type="email"
                            defaultValue={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                        mt="22px"
                        id="pass"
                        isInvalid={!!errors.pass}
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                        >
                            <FormLabel
                                htmlFor="pass"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                                color="#262626"
                            >
                                Senha:
                            </FormLabel>
                            <A
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                                color={theme.blue500}
                                mb="7px"
                                onClick={toggleForm}
                            >
                                Esqueceu sua senha?
                            </A>
                        </Flex>
                        <Input
                            type="password"
                            defaultValue={pass}
                            onChange={event => setPass(event.target.value)}
                        />

                        <FormErrorMessage>{errors.pass}</FormErrorMessage>
                    </FormControl>

                    <Button
                        background={theme.blue500}
                        color="#fff"
                        marginTop="32px"

                        onClick={handleSubmit}

                        _hover={{
                            background: theme.blue300
                        }}
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Form