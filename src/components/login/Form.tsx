import { Flex, Text, Image, Button, FormControl, FormLabel, Input, Link as A } from '@chakra-ui/react'

import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import { theme } from '../../styles/theme'
import { supabase } from '../../utils/supabaseClient'

interface IProps {
    toggleForm: () => void
}

const Form: React.FC<IProps> = ({ toggleForm }) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = async () => {
        if (!email || !pass) return console.error('Por favor preencha sua informações corretamente')

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) return console.error('Por favor preencha sua informações corretamente')

        let { user, error } = await supabase.auth.signIn({
            email: email,
            password: pass
        })

        if (error) return console.error(error.message)

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
                    <FormControl>
                        <FormLabel
                            id="email"
                            htmlFor="email"
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="16px"
                            color="#262626"
                        >
                            Email:
                        </FormLabel>
                        <Input
                            id="email"
                            type="email"
                            defaultValue={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </FormControl>

                    <FormControl
                        mt="22px"
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                        >
                            <FormLabel
                                id="pass"
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
                            id="pass"
                            type="password"
                            defaultValue={pass}
                            onChange={event => setPass(event.target.value)}
                        />
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