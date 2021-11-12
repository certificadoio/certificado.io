import { Flex, Text, Modal, Button, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import useGlobal from '../../../store/useGlobal'
import { supabase } from '../../../utils/supabaseClient'

interface IProps {
    type?: string
}

const ModalDelete: React.FC<IProps> = ({ type }) => {

    const global = useGlobal(state => state)

    const handleDelete = async () => {

        if (global.idToAction == null) return global.toggleModalDelete()

        const response = await supabase
            .from('themes_io')
            .delete()
            .eq('course_id', global.idToAction)

        const response2 = await supabase
            .from('courses_io')
            .delete()
            .eq('id', global.idToAction)

        if (response.error || response2.error) return console.error(response.error?.message, response2.error?.message)

        return window.location.reload()
    }

    return (
        <Modal isOpen={global.showModalDelete} onClose={() => { }}>
            <ModalOverlay />

            <ModalContent marginX="25px">
                <ModalCloseButton
                    fontWeight="700"
                    fontSize="16px"
                    color="rgba(0,0,0,0.4)"
                    onClick={() => global.toggleModalDelete()}
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
                        EXCLUIR {type === 'certificado' ? 'CERTIFICADO' : 'CURSO'}
                    </Text>

                    <Flex
                        direction="column"
                        align="center"
                        justify="center"

                    >
                        <Text
                            marginTop="45px"
                            fontWeight="500"
                            fontSize="18px"
                            color="rgba(0,0,0,0.6)"
                            textAlign="center"
                        >
                            Tem certeza que deseja excluir o {type === 'certificado' ? 'certificado' : 'curso'} selecionado?
                        </Text>

                        <Button
                            mt="45px"
                            background="#FA8A86"
                            height="42px"
                            width="100%"
                            color="#fff"
                            _hover={{
                                background: '#DE7A76'
                            }}
                            _active={{
                                background: '#FA8A86'
                            }}

                            onClick={handleDelete}
                        >
                            Sim, excluir {type === 'certificado' ? 'certificado' : 'curso'}
                        </Button>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal >
    )
}

export default ModalDelete