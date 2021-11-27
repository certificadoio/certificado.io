import { Box, Text, Flex, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CertificateToShow } from '../../../pages/c/[id]'
import useNewCourse from '../../../store/useNewCourse'
import { theme } from '../../../styles/theme'
import { supabase } from '../../../utils/supabaseClient'

import Link from 'next/link'

interface IState {
    logo?: string,
    signature?: string
}

const CertificatePublicPreview: React.FC<CertificateToShow> = ({ data }) => {

    const [imagesUrl, setImagesUrl] = useState<IState>({})

    let dateString = data?.created_at.substring(0, 10)
    let dateArray = dateString?.split('-') // yyyy-MM-dd
    let localDate = dateArray ? `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}` : ''

    useEffect(() => {
        (async () => {

            const logo = data?.themes_io.logo || ''
            const signature = data?.themes_io.signature || ''

            if (logo === '' || signature === '') return

            const response = await supabase.storage.from('dev-images').download(logo)
            const response2 = await supabase.storage.from('dev-images').download(signature)

            if (response.error) { throw response.error }
            if (response2.error) { throw response2.error }

            const logoUrl = URL.createObjectURL(response?.data)
            const signatureUrl = URL.createObjectURL(response2?.data)

            setImagesUrl({ signature: signatureUrl, logo: logoUrl })
        })()
    }, [data])

    return (
        <Flex
            //Container do certificado !!!!!
            marginTop={["25px", "40px", "55px"]}
            width="100%"
            maxWidth="651px"
            direction="column"
            minHeight="500px"
            height="500px"
            px={["25px", "25px", "0"]}
        >

            <Flex
                display="flex"
                background="#fff"
                direction="column"
                flex="1"
                borderLeft="1px solid #f5f5f5"
                boxShadow="3px 5px 10px rgba(0,0,0,0.2)"
            >

                <Flex
                    padding="4px"
                    flex="1"
                >
                    <Box
                        // 651x500
                        position="relative"
                        background="#fff"
                        width="100%"
                        maxHeight="500px"
                        border='1px solid rgba(0, 0, 0, 0.13)'
                        overflow="hidden"
                        boxShadow="0px 4px 24px rgba(0, 0, 0, 0.06)"
                    >
                        <Box
                            width="153.61%"
                            height="116%"
                            background={data?.themes_io ? data?.themes_io.secondary_bg_color : data?.themes_io.secondary_bg_color}
                            borderRadius="500px / 85px"
                            position="absolute"
                            mt="-400px"
                            ml="-26.96%"
                        />

                        <Box
                            width="153.61%"
                            height="116%"
                            background={data?.themes_io ? data?.themes_io.primary_bg_color : data?.themes_io.primary_bg_color}
                            borderRadius="500px / 290px"
                            position="absolute"
                            mt="-400px"
                            ml="-26.96%"
                            boxShadow="0px 3px 12px rgba(0, 0, 0, 0.25)"
                        />

                        <Flex
                            position="absolute"
                            width="100%"
                            justify="center"
                            top="110px"
                        >
                            <Flex
                                borderRadius="100%"
                                width="90px"
                                height="90px"
                                background="#fff"
                                border="4px solid #DAE2FF"
                                align="center"
                                justify="center"
                                boxShadow="0px 4px 24px rgba(0, 0, 0, 0.25)"
                                overflow="hidden"
                            >

                                {imagesUrl.logo &&
                                    <Image src={imagesUrl.logo} alt="logo" width="90px" height="90px" />
                                }

                                {!imagesUrl.logo &&
                                    <Flex
                                        width="65px"
                                        height="43px"
                                        borderRadius="4px"
                                        border="1px dashed rgba(0, 0, 0, 0.2)"
                                        align="center"
                                        justify="center"
                                        fontWeight="700"
                                        color={data?.themes_io ? data?.themes_io.primary_color : ''}
                                    >
                                        <Text>LOGO</Text>
                                    </Flex>
                                }
                            </Flex>
                        </Flex>

                        <Flex
                            position="absolute"
                            width="100%"
                            height="170px"
                            top="235px"
                            flexDirection="column"
                            align="center"
                        >

                            <Text
                                fontWeight="700"
                                fontSize="20px"
                                color={data?.themes_io ? data?.themes_io.primary_color : data?.themes_io.primary_color}
                            >
                                {data?.name ? data?.name : 'Emerson Lemos de Andrade'}
                            </Text>

                            <Text
                                mt="8px"
                                color={data?.themes_io ? data?.themes_io.secondary_color : data?.themes_io.secondary_color}
                                fontWeight="500"
                                fontSize="12px"
                            >
                                {data?.themes_io?.graduated_in ? data?.themes_io.graduated_in : data?.themes_io.graduated_in ? data?.themes_io.graduated_in : 'Graduado em'}
                            </Text>

                            <Text
                                mt="4px"
                                color={data?.themes_io ? data?.themes_io.primary_color : data?.themes_io.primary_color}
                                fontWeight="700"
                                fontSize="15px"
                            >
                                {data?.courses_io?.title ? data?.courses_io.title : data?.courses_io.title ? data?.courses_io.title : 'Curso de Kali Linux'}
                            </Text>

                            <Flex
                                position="relative"
                                height="50px"
                                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                                width="100%"
                                maxWidth="270px"
                            >
                                {imagesUrl.signature &&
                                    <Image
                                        src={imagesUrl.signature}
                                        alt="signature"
                                        mx="auto"
                                    />
                                }
                            </Flex>

                            <Text
                                fontSize="10px"
                                mt="10px"
                                color={data?.themes_io ? data?.themes_io?.secondary_color : data?.themes_io.secondary_color}
                            >
                                {data?.themes_io?.footer_signature ? data?.themes_io?.footer_signature : data?.themes_io.footer_signature ? data?.themes_io.footer_signature : 'Coordenador do curso'}
                            </Text>

                        </Flex>

                        <Text
                            position="absolute"
                            top="30px"
                            width="100%"
                            textAlign="center"
                            fontSize="20px"
                            fontWeight="700"
                            color="#fff"
                        >
                            {data?.themes_io?.title ? data?.themes_io?.title : data?.themes_io.title ? data?.themes_io.title : 'CERTIFICADO DE CONCLUSÃO'}
                        </Text>

                        <Text
                            position="absolute"
                            top="62px"
                            width="100%"
                            textAlign="center"
                            fontWeight="12px"
                            color="rgba(255,255,255,0.5)"
                        >
                            {data?.themes_io?.subtitle ? data?.themes_io?.subtitle : data?.themes_io.subtitle ? data?.themes_io.subtitle : 'Subtitle'}
                        </Text>

                        <Flex
                            position="absolute"
                            width="100%"
                            bottom="0"
                            height="40px"
                            justify="space-between"
                            paddingX="50px"
                            fontSize="10px"
                            color={data?.themes_io.secondary_color}
                            textAlign="center"
                        >
                            <Text>Data de emissão: {localDate}</Text>
                            <Text>Código: {data?.id_view}</Text>
                        </Flex>

                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CertificatePublicPreview
