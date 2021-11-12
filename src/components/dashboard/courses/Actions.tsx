import { Flex, Text, Link as A, Input, FormControl, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

import Link from 'next/link'

import { theme } from '../../../styles/theme'
import useGlobal from '../../../store/useGlobal'
import useNewCourse from '../../../store/useNewCourse'
import router from 'next/router'

export default function Actions() {

    const global = useGlobal(state => state)
    const newCourse = useNewCourse(state => state)

    const handleNewCourse = () => {
        newCourse.editMode ? newCourse.toggleEditMode() : () => { }
        newCourse.resetData()
        newCourse.resetProgressCount()
        router.push('/curso')
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
                        Meus cursos
                    </Text>
                    <Text
                        display={["none", "inline"]}
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="16px"
                        marginLeft="15px"
                    >
                        {global.coursesLength} cursos cadastrados
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

                    onClick={handleNewCourse}
                >
                    Novo Curso
                </Button>

            </Flex>
            {/* Barra de pesquisas */}
            <Flex
                padding="0 25px"
            >
                <FormControl marginTop="15px">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                        >
                            <FaSearch color="rgba(0,0,0,0.2)" />
                        </InputLeftElement>
                        <Input
                            id="search"
                            background="#fff"
                            placeholder="Pesquise um curso por nome ou habilidade"

                            onChange={event => global.setSearchText(event.target.value)}

                        />
                    </InputGroup>
                </FormControl>
            </Flex>
        </>
    )
}
