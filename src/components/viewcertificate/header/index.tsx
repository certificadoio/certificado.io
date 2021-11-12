import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Container from './Container'
import Logo from './Logo'

interface IProps {
    certificates?: boolean
}

const HeaderViewCertificate: React.FC<IProps> = ({ certificates }) => {

    return (
        <>
            <Container>
                <Logo />

                <Flex
                    display={["none", "flex"]}
                >
                    <Flex
                        display={["none", "none", "flex"]}
                        minWidth="max-content"
                        mr="50px"
                        cursor="pointer"
                    >
                        <Image src="/assets/icons/downloadPDF.svg" alt="Download PDF" />
                        <Text
                            ml="8px"
                            fontSize="14px"
                            fontWeight="500"
                            color="#666"
                        >
                            Download PDF
                        </Text>
                    </Flex>

                    <Flex width="max-content" cursor="pointer">
                        <Image src="/assets/icons/share.svg" alt="share PDF" />
                        <Text
                            ml="8px"
                            fontSize="14px"
                            fontWeight="500"
                            color="#666"
                        >
                            Compartilhe seu certificado
                        </Text>
                    </Flex>
                </Flex>

            </Container>
        </>
    )
}

export default HeaderViewCertificate