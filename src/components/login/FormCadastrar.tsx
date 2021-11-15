import { Flex, Text, Image, Button, FormControl, FormLabel, Input, Link as A } from '@chakra-ui/react'

import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import useGlobal from '../../store/useGlobal'
import { theme } from '../../styles/theme'
import { supabase } from '../../utils/supabaseClient'
const initialError = {
    email: '',
    pass: '',
}
const FormCadastrar: React.FC = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(initialError)

    const global = useGlobal(state => state)

    const handleSubmit = async () => {

        setIsLoading(true)

        if (!email || !pass) return setErrors({
            email: 'Preencha suas informações corretamente',
            pass: 'Preencha suas informações corretamente',
        })

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) return setErrors({
            email: 'Preencha um email válido',
            pass: '',
        })

        let { user, error } = await supabase.auth.signUp({
            email: email,
            password: pass
        })

        if (error) return console.error(error.message)

        setIsLoading(false)

        return global.toggleModalCreatedNewUser()
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
                        SEJA BEM VINDO
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="33px"
                    >
                        Crie uma nova conta
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

                                onClick={() => router.push('/login')}

                            >
                                Já tem uma conta?
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
                        isLoading={isLoading}
                        background={theme.blue500}
                        color="#fff"
                        marginTop="32px"

                        onClick={handleSubmit}

                        _hover={{
                            background: theme.blue300
                        }}
                    >
                        Cadastrar
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FormCadastrar