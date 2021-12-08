import { Flex, Text, Modal, Link, ModalOverlay, ModalCloseButton, ModalContent } from '@chakra-ui/react'
import useGlobal from '../../../store/useGlobal'
import { supabase } from '../../../utils/supabaseClient'

interface IProps {
    type?: string
}

const ModalLimitCertificate: React.FC<IProps> = ({ type }) => {

    const global = useGlobal(state => state)

    return (
        <Modal isOpen={global.showModalLimitCertificate} onClose={() => { }}>
            <ModalOverlay />

            <ModalContent marginX="25px">
                <ModalCloseButton
                    fontWeight="700"
                    fontSize="16px"
                    color="rgba(0,0,0,0.4)"
                    onClick={global.toggleModalLimitCertificate}
                />

                <Flex
                    padding="24px 28px"
                    direction="column"
                    align="center"
                >
                    <Text
                        mt="36px"
                        fontWeight="700"
                        fontSize="20px"
                        color="black"
                        maxWidth="198px"
                        textAlign="center"
                    >
                        Você atingiu o limite
                        de certificados.
                    </Text>

                    <Flex
                        direction="column"
                        align="center"
                        justify="center"

                    >
                        <Text
                            marginTop="11px"
                            fontWeight="500"
                            fontSize="18px"
                            color="rgba(0,0,0,0.6)"
                            textAlign="center"
                        >
                            Parar criar mais certificados, assine o plano profissional.
                        </Text>

                        <Link
                            href="https://pay.hotmart.com/J63430578I"
                            borderRadius="4px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mt="30px"
                            background="#BBC564"
                            height="42px"
                            width="100%"
                            color="#fff"
                            _hover={{
                                background: '#BBC564'
                            }}
                            _active={{
                                background: '#BBC564'
                            }}

                        >
                            Fazer upgrade
                        </Link>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal >
    )
}

export default ModalLimitCertificate