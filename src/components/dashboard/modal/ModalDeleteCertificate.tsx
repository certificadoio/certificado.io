import { Flex, Text, Modal, Button, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import useGlobal from '../../../store/useGlobal'
import { supabase } from '../../../utils/supabaseClient'

interface IProps {
    type?: string
}

const ModalDeleteCertificate: React.FC<IProps> = ({ type }) => {

    const global = useGlobal(state => state)

    const handleDelete = async () => {

        if (global.idToAction == null) return global.toggleModalDeleteCertificate(null)

        const { data, error } = await supabase
            .from('certificates_io')
            .delete()
            .eq('id', global.idToAction)

        if (error) return console.error(error.message)

        window.location.reload()
    }

    return (
        <Modal isOpen={global.showModalDeleteCertificate} onClose={() => { }}>
            <ModalOverlay />

            <ModalContent marginX="25px">
                <ModalCloseButton
                    fontWeight="700"
                    fontSize="16px"
                    color="rgba(0,0,0,0.4)"
                    onClick={() => global.toggleModalDeleteCertificate(null)}
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
                        EXCLUIR CERTIFICADO
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
                            Tem certeza que deseja excluir o certificado selecionado?
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
                            Sim, excluir certificado
                        </Button>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal >
    )
}

export default ModalDeleteCertificate