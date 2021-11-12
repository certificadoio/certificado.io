import { Flex, Text, Modal, Image, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useGlobal from '../../../store/useGlobal'
import useNewCourse from '../../../store/useNewCourse'

const ModalCertificateCreated: React.FC = () => {

    const global = useGlobal(state => state)
    const state = useNewCourse(state => state)
    const router = useRouter()

    const handlerClose = () => {

        global.toggleModalCertificateCreated()
        router.push('/certificados')

    }

    return (
        <Modal isOpen={global.showModalCertificate} onClose={handlerClose}>
            <ModalOverlay />

            <ModalContent marginX="25px">
                <ModalCloseButton
                    fontWeight="700"
                    fontSize="16px"
                    color="rgba(0,0,0,0.4)"
                    onClick={
                        global.toggleModalCreated
                    }
                />

                <Flex
                    padding="24px 28px"
                    direction="column"
                >
                    <Text
                        fontWeight="700"
                        fontSize="16px"
                        color="rgba(0,0,0,0.4)"
                    >
                        NOVO CERTIFICADO
                    </Text>

                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        height="120px"
                    >
                        <Image src="/assets/icons/like.svg" alt="like" width="22px" />
                        <Text
                            marginTop="15px"
                            fontWeight="500"
                            fontSize="18px"
                            color="rgba(0,0,0,0.6)"
                        >
                            Certificado emitido com sucesso
                        </Text>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal >
    )
}

export default ModalCertificateCreated