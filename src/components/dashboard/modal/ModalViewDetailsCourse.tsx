import { Flex, Text, Modal, Image, ModalOverlay, ModalCloseButton, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import useGlobal from '../../../store/useGlobal'
import useNewCourse from '../../../store/useNewCourse'
import { theme } from '../../../styles/theme'
import { useRouter } from 'next/router'

const ModalViewDetailsCourse: React.FC = () => {

    const router = useRouter()

    const global = useGlobal(state => state)
    const newCourse = useNewCourse(state => state)

    const handlerEditMode = () => {
        newCourse.toggleEditMode(global.courseToShow?.id)
        newCourse.resetProgressCount()
        global.toggleModalViewDetailsCourse()
        router.push('/curso')
    }

    const handleClose = () => {
        global.resetCourseToShow()
        global.toggleModalViewDetailsCourse()
    }

    return (
        <Modal isOpen={global.showModalViewDetailsCourse} onClose={() => { }}>
            <ModalOverlay />

            <ModalContent px={["15px", "25px", "40px"]} py="40px" width="100%" maxWidth={["330px", "500px", "720px"]}>
                <ModalCloseButton
                    fontWeight="700"
                    fontSize="16px"
                    color="rgba(0,0,0,0.4)"
                    onClick={handleClose}
                />
                <ModalHeader>
                    <Text
                        color="#353535"
                        fontWeight="700"
                        fontSize="20px"
                        maxWidth="300px"
                    >
                        {global.courseToShow?.title}
                    </Text>
                </ModalHeader>

                <ModalBody>
                    <Text
                        color="#353535"
                        fontWeight="500"
                        fontSize="14px"
                        maxWidth="560px"
                    >
                        {global.courseToShow?.description}
                    </Text>

                    <Flex mt="22px" direction={["column", "column", "row"]}>

                        <Flex
                            align="center"
                            mr={["0", "0", "40px"]}
                            mb={["10px", "10px", "0"]}
                        >
                            <Image
                                src="/assets/icons/certificate.svg"
                                alt="certificate"
                                width=""
                            />

                            <Text
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="21px"
                                color="#8c8c8c"
                                marginLeft="10px"
                            >
                                47 certificados registrados
                            </Text>
                        </Flex>

                        <Flex
                            align="center"
                        >
                            <Image
                                src="/assets/icons/calendar.svg"
                                alt="certificate"
                                width=""
                            />

                            <Text
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="21px"
                                color="#8c8c8c"
                                marginLeft="10px"
                            >
                                Criado em {global.courseToShow?.created_at?.substring(0, 10)}
                            </Text>
                        </Flex>

                    </Flex>

                    <Flex
                        marginTop="40px"
                    >

                        {global.courseToShow?.skills?.split(',').map((skill, index) => {
                            if (index >= 3) return

                            return (
                                <Text
                                    key={index}
                                    fontWeight="500"
                                    fontSize="12px"
                                    lineHeight="18px"
                                    color={theme.green500}
                                    background={theme.green100}
                                    padding="3px 13px"
                                    borderRadius="500px"
                                    marginRight="3px"
                                >
                                    {skill.trim()}
                                </Text>
                            )
                        })}

                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Flex
                        width="100%"
                        justify="space-between"
                        mt="50px"
                    >
                        <Button
                            color="#FA8A86"
                            border="1px solid #FA8A86"
                            bg="transparent"
                            fontSize="14px"

                            _hover={{
                                background: 'transparent'
                            }}

                            onClick={() => global.toggleModalDelete(global.courseToShow?.id)}
                        >
                            Excluir
                        </Button>
                        <Flex width="max-content">
                            <Button
                                display={["none", "inline"]}
                                color="rgba(0,0,0,0.8)"
                                border="1px solid rgba(0,0,0,0.35)"
                                bg="transparent"
                                fontSize="14px"
                                mx="8px"

                                _hover={{
                                    background: 'transparent'
                                }}

                                onClick={() => router.push('/certificado')}
                            >
                                Emitir novo certificado
                            </Button>

                            <Button
                                color="rgba(0,0,0,0.8)"
                                border="1px solid rgba(0,0,0,0.35)"
                                bg="transparent"
                                fontSize="14px"

                                _hover={{
                                    background: 'transparent'
                                }}

                                onClick={handlerEditMode}
                            >
                                Editar
                            </Button>
                        </Flex>
                    </Flex>
                </ModalFooter>

            </ModalContent>
        </Modal >
    )
}

export default ModalViewDetailsCourse