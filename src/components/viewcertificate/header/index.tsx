import { Flex, Text, Box, Image, Link as A } from '@chakra-ui/react'
import { CertificateToShow } from '../../../pages/c/[id]'
import Container from './Container'
import Logo from './Logo'

interface IProps {
    data: any
}

const HeaderViewCertificate: React.FC<IProps> = ({ data }) => {

    console.log(data?.created_at.split('T').shift().split('-')[1])

    const ORG_NAME = "Certificado.io"
    const CERTIFICATE_NAME = data?.courses_io?.title
    const CERTIFICATE_ID = data?.id_view
    const CREATED_YEAR = data?.created_at.split('T').shift().split('-')[0]
    const CREATED_MONTH = data?.created_at.split('T').shift().split('-')[1]
    const EXPIRATION_YEAR = ""
    const EXPIRATION_MONTH = ""
    const CERTIFICATE_URL = `${process.env.NEXT_PUBLIC_HOST}/c/${data?.id_view}`

    const URL = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${CERTIFICATE_NAME}&organizationName=${ORG_NAME}&issueYear=${CREATED_YEAR}&issueMonth=${CREATED_MONTH}&expirationYear=${EXPIRATION_YEAR}&expirationMonth=${EXPIRATION_MONTH}&certUrl=${CERTIFICATE_URL}&certId=${CERTIFICATE_ID}`

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
                        <A
                            href={URL}
                            target="_blank"
                            ml="8px"
                            fontSize="14px"
                            fontWeight="500"
                            color="#666"
                        >
                            Compartilhe seu certificado
                        </A>
                    </Flex>
                </Flex>

            </Container>
        </>
    )
}

export default HeaderViewCertificate