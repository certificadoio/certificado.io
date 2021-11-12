import { Flex, Text, Modal, Image, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useGlobal from '../../../store/useGlobal'
import useNewCourse from '../../../store/useNewCourse'

const ModalSuccess: React.FC = () => {

    const global = useGlobal(state => state)
    const state = useNewCourse(state => state)
    const router = useRouter()

    const handlerClose = () => {
        if (state.editMode) {
            state.toggleEditMode()
        }
        router.push('/')
    }

    return (
        <Modal isOpen={global.showModalCreated} onClose={handlerClose}>
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
                        {state.editMode ? 'ATUALIZAR INFORMAÇÕES' : 'NOVO CURSO'}
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
                            Curso {state.editMode ? 'atualizado' : 'cadastrado'} com sucesso
                        </Text>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal >
    )
}

export default ModalSuccess