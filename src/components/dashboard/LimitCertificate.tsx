import { Flex, Text, Link } from '@chakra-ui/react'
import useGlobal from '../../store/useGlobal'

const LimitCertificate: React.FC = () => {

    const global = useGlobal(state => state)

    console.log(global.certificatesLength)

    return (
        <>
            {global.certificatesLength >= 10 &&
                <Flex
                    width="100%"
                    height="40px"
                    background="#1937A2"
                    align="center"
                    justify="center"
                    gridGap="16px"
                    color="#fff"
                    fontSize="14px"
                >
                    <Text>
                        <b>Você atingiu o limite de certificados.&nbsp;</b>
                        Para continuar utilizando, assine o plano profissional.
                    </Text>
                    <Link
                        href="https://pay.hotmart.com/J63430578I"
                        fontWeight="400"
                        background="#C0CE44"
                        width="121px"
                        height="26px"
                        borderRadius="2px"

                        display="flex"
                        alignItems="center"
                        justifyContent="center"

                        _hover={{
                            background: "#C0CE44"
                        }}
                    >
                        Fazer upgrade
                    </Link>
                </Flex>}
        </>
    )
}

export default LimitCertificate
