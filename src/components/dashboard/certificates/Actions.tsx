import { Flex, Text, Link as A, Input, FormControl, InputGroup, InputLeftElement, Button, FormLabel } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { BsFilter } from 'react-icons/bs'

import Link from 'next/link'

import { theme } from '../../../styles/theme'
import useGlobal from '../../../store/useGlobal'
import { useRouter } from 'next/router'

export default function Actions() {

    const global = useGlobal(state => state)
    const router = useRouter()

    const handleNewCertificate = () => {
        global.resetidToAction()
        router.push('/certificado')
    }

    return (
        <>
            <Flex
                marginTop="20px"
                padding="0 25px"
                justify="space-between"
                align="center"
            >
                <Flex
                    align="center"
                >
                    <Text
                        fontWeight="500"
                        fontSize="20px"
                        lineHeight="22px"
                    >
                        Meus certificados
                    </Text>
                    <Text
                        display={["none", "inline"]}
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="16px"
                        marginLeft="15px"
                    >
                        {global.certificatesLength} certificados cadastrados
                    </Text>
                </Flex>


                <Button
                    fontSize="14px"
                    fontWeight="700"
                    background={theme.blue500}
                    color="#fff"
                    padding={["6px 12px", "12px 24px"]}
                    borderRadius="5px"

                    _hover={{
                        background: theme.blue600
                    }}

                    onClick={handleNewCertificate}
                >
                    Novo Certificado
                </Button>


            </Flex>
            {/* Barra de pesquisas */}
            <Flex
                marginTop="15px"
                padding="0 25px"
                align="center"
            >
                <FormControl>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                        >
                            <FaSearch color="rgba(0,0,0,0.2)" />
                        </InputLeftElement>
                        <Input
                            id="search"
                            background="#fff"
                            placeholder="Pesquise um certificado por nome do aluno ou email"
                            defaultValue={global.searchText}
                            onChange={event => global.setSearchText(event.target.value)}
                        />
                    </InputGroup>
                </FormControl>

                {/* <Button leftIcon={<BsFilter />} variant="outline">
                    Filtros
                </Button> */}
            </Flex>
        </>
    )
}
