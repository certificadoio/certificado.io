import { Flex, Text, Image, Button, FormControl, FormLabel, Input, Link as A, FormErrorMessage } from '@chakra-ui/react'

import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import useGlobal from '../../store/useGlobal'
import { theme } from '../../styles/theme'
import { supabase } from '../../utils/supabaseClient'
const initialError = {
    email: '',
    pass: '',
    pass2: '',
    company: '',
    name: '',
}
const FormCadastrar: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(initialError)

    const global = useGlobal(state => state)

    const checkInputs = () => {
        let errors = initialError

        if (name === "") {
            errors = {
                ...errors,
                name: 'Preencha seu nome'
            }
        }

        if (email === "") {
            errors = {
                ...errors,
                email: 'Preencha seu melhor email'
            }
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            errors = {
                ...errors,
                email: 'Preencha um email válido'
            }
        }

        if (company === "") {
            errors = {
                ...errors,
                company: 'Preencha o nome da sua Empresa / Escola / Instituição'
            }
        }

        if (pass === "") {
            errors = {
                ...errors,
                pass: 'Preencha uma senha'
            }
        }

        if (pass2 === "") {
            errors = {
                ...errors,
                pass2: 'Confirme sua senha'
            }
        }

        if (pass !== pass2) {
            errors = {
                ...errors,
                pass: 'As senhas não coincidem',
                pass2: 'As senhas não coincidem'
            }
        }

        setErrors(errors)

        if (JSON.stringify(errors) !== JSON.stringify(initialError)) {
            return false
        }

        return true
    }

    const handleSubmit = async () => {

        const res = checkInputs()
        if (!res) return

        try {
            setIsLoading(true)

            let { user, error } = await supabase.auth.signUp({
                email: email,
                password: pass
            }, {
                data: {
                    name: name,
                    company: company,
                }
            })

        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

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
                    gridGap="22px"
                >
                    <FormControl
                        id="name"
                        isInvalid={!!errors.name}
                    >
                        <FormLabel
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="16px"
                            color="#262626"
                        >
                            Nome:
                        </FormLabel>
                        <Input
                            type="text"
                            defaultValue={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <FormErrorMessage>
                            {errors.name}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="email"
                        isInvalid={!!errors.email}
                    >
                        <FormLabel
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
                        <FormErrorMessage>
                            {errors.email}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="company"
                        isInvalid={!!errors.company}
                    >
                        <FormLabel
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="16px"
                            color="#262626"
                        >
                            Nome da Empresa / Escola / Instituição:
                        </FormLabel>
                        <Input
                            type="email"
                            defaultValue={company}
                            onChange={event => setCompany(event.target.value)}
                        />
                        <FormErrorMessage>
                            {errors.company}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="pass"
                        isInvalid={!!errors.pass}
                    >
                        <FormLabel
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="16px"
                            color="#262626"
                        >
                            Senha:
                        </FormLabel>
                        <Input
                            type="password"
                            defaultValue={pass}
                            onChange={event => setPass(event.target.value)}
                        />
                        <FormErrorMessage>
                            {errors.pass}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="pass2"
                        isInvalid={!!errors.pass2}
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                        >
                            <FormLabel
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                                color="#262626"
                            >
                                Confirme sua senha:
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
                            type="password"
                            defaultValue={pass2}
                            onChange={event => setPass2(event.target.value)}
                        />
                        <FormErrorMessage>
                            {errors.pass2}
                        </FormErrorMessage>
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