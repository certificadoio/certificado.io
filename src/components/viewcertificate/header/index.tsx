import { Flex, Text, Box, Image, Link as A } from '@chakra-ui/react'
import { CertificateToShow } from '../../../pages/c/[id]'
import Container from './Container'
import Logo from './Logo'
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import { useState } from 'react'
import { WhatsappShareButton, FacebookShareButton, TwitterShareButton } from 'react-share'

interface IProps {
    data: any,
    download: () => void,
}

const HeaderViewCertificate: React.FC<IProps> = ({ data, download }) => {

    // console.log(data?.created_at.split('T').shift().split('-')[1])
    const [shareCertificateShowing, setShareCertificateShowing] = useState(false)

    const ORG_NAME = "Certificado.io"
    const CERTIFICATE_NAME = data?.courses_io?.title
    const CERTIFICATE_ID = data?.id_view
    const CREATED_YEAR = data?.created_at.split('T').shift().split('-')[0]
    const CREATED_MONTH = data?.created_at.split('T').shift().split('-')[1]
    const EXPIRATION_YEAR = ""
    const EXPIRATION_MONTH = ""
    const CERTIFICATE_URL = `app.certificado.io/c/${data?.id_view}`

    const URL_LINKEDIN = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${CERTIFICATE_NAME}&organizationName=${ORG_NAME}&issueYear=${CREATED_YEAR}&issueMonth=${CREATED_MONTH}&expirationYear=${EXPIRATION_YEAR}&expirationMonth=${EXPIRATION_MONTH}&certUrl=${CERTIFICATE_URL}&certId=${CERTIFICATE_ID}`

    return (
        <>
            <Container>
                <Logo />

                <Flex
                    display={["none", "flex"]}
                >
                    <Flex
                        display="none"
                        width="max-content"
                        mr="50px"
                        cursor="pointer"
                        onClick={download}
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

                    <Flex
                        width="max-content"
                        position="relative"
                    >
                        <Flex
                            cursor="pointer"
                            onClick={() => setShareCertificateShowing(!shareCertificateShowing)}
                        >
                            <Image src="/assets/icons/share.svg" alt="share PDF" />
                            <Text
                                target="_blank"
                                ml="8px"
                                fontSize="14px"
                                fontWeight="500"
                                color="#666"
                            >
                                Compartilhe seu certificado
                            </Text>
                        </Flex>

                        <Flex
                            display={shareCertificateShowing ? 'flex' : 'none'}
                            position="absolute"
                            width="239px"
                            height="max-content"
                            border="1px solid #F5F5F5"
                            zIndex={10}
                            bg="#fff"
                            mt="35px"
                            direction="column"
                        >
                            <WhatsappShareButton
                                url={CERTIFICATE_URL}
                                title="Certificado Emitido"
                            >
                                <Flex
                                    align="center"
                                    height="37px"
                                    pl="27px"

                                    onClick={() => setShareCertificateShowing(!shareCertificateShowing)}

                                    _hover={{
                                        background: '#F5F5F5'
                                    }}

                                    cursor="pointer"
                                >
                                    <FaWhatsapp
                                        color="#7287D0"
                                        fontSize="18px"
                                    />
                                    <Text
                                        color="#666666"
                                        fontSize="14px"
                                        fontWeight="500"
                                        ml="8px"
                                    >
                                        Whatsapp
                                    </Text>
                                </Flex>
                            </WhatsappShareButton>

                            <TwitterShareButton
                                url={CERTIFICATE_URL}
                                title="Certificado Emitido"
                            >
                                <Flex
                                    align="center"
                                    height="37px"
                                    pl="27px"
                                    cursor="pointer"

                                    onClick={() => setShareCertificateShowing(!shareCertificateShowing)}

                                    _hover={{
                                        background: '#F5F5F5'
                                    }}
                                >
                                    <FaTwitter
                                        color="#7287D0"
                                        fontSize="18px"
                                    />
                                    <Text
                                        color="#666666"
                                        fontSize="14px"
                                        fontWeight="500"
                                        ml="8px"
                                    >
                                        Twitter
                                    </Text>
                                </Flex>
                            </TwitterShareButton>

                            <A
                                target="_blank"
                                href={URL_LINKEDIN}
                                display="flex"
                                alignItems="center"
                                height="37px"
                                pl="27px"
                                cursor="pointer"

                                onClick={() => setShareCertificateShowing(!shareCertificateShowing)}

                                _hover={{
                                    background: '#F5F5F5'
                                }}
                            >
                                <FaLinkedin
                                    color="#7287D0"
                                    fontSize="18px"
                                />
                                <Text
                                    color="#666666"
                                    fontSize="14px"
                                    fontWeight="500"
                                    ml="8px"
                                >
                                    Linkedin
                                </Text>
                            </A>

                            <FacebookShareButton
                                url={CERTIFICATE_URL}
                                title="Certificado Emitido"
                            >
                                <Flex
                                    align="center"
                                    height="37px"
                                    pl="27px"
                                    cursor="pointer"

                                    onClick={() => setShareCertificateShowing(!shareCertificateShowing)}

                                    _hover={{
                                        background: '#F5F5F5'
                                    }}
                                >
                                    <FaFacebookSquare
                                        color="#7287D0"
                                        fontSize="18px"
                                    />
                                    <Text
                                        color="#666666"
                                        fontSize="14px"
                                        fontWeight="500"
                                        ml="8px"
                                    >
                                        Facebook
                                    </Text>
                                </Flex>
                            </FacebookShareButton>

                        </Flex>
                    </Flex>
                </Flex>

            </Container>
        </>
    )
}

export default HeaderViewCertificate