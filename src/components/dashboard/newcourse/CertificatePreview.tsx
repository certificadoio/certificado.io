import { Box, Text, Flex, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CertificateToShow } from '../../../pages/c/[id]'
import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'

const CertificatePreview: React.FC<CertificateToShow> = ({ data }) => {

    const state = useNewCourse(state => state)
    const [logoImg, setLogoImg] = useState(null)
    const [signatureImg, setSignatureImg] = useState(null)

    let dateString = data?.created_at.substring(0, 10)
    let dateArray = dateString?.split('-') // yyyy-MM-dd
    let localDate = dateArray ? `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}` : ''

    // async function downloadImage(path: string, object: string) {
    //     //recebe o nome da imagem
    //     try {
    //         const { data, error } = await supabase.storage.from('images').download(path)

    //         if (error) { throw error }

    //         const url = URL.createObjectURL(data)

    //         setImagesUrl({ ...imagesUrl, [`${object}`]: url })
    //     } catch (error) {
    //         console.error('Error downloading image: ', error)
    //     }
    // }

    function blobToDataURL(blob: Blob, callback: (data: any) => void) {
        var a = new FileReader();
        a.onload = function (e: any) { callback(e.target.result); }
        a.readAsDataURL(blob);
    }

    useEffect(() => {

        console.log(state.logoBlob)

        if (state.logoBlob) {
            let blob = new Blob([state.logoBlob], { type: state.logoBlob.type })
            blobToDataURL(blob, (data) => {
                setLogoImg(data)
            })
        }
    }, [state.logoBlob])

    useEffect(() => {

        console.log(state.signatureBlob)

        if (state.signatureBlob) {
            let blob = new Blob([state.signatureBlob], { type: state.signatureBlob.type })
            blobToDataURL(blob, (data) => {
                setSignatureImg(data)
            })
        }
    }, [state.signatureBlob])

    return (
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
                background={data?.themes_io ? data?.themes_io.secondary_bg_color : state.themeCertificate.secondary_bg_color}
                borderRadius="500px / 85px"
                position="absolute"
                mt="-400px"
                ml="-26.96%"
            />

            <Box
                width="153.61%"
                height="116%"
                background={data?.themes_io ? data?.themes_io.primary_bg_color : state.themeCertificate.primary_bg_color}
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
                top="100px"
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

                    {logoImg &&
                        <Image src={logoImg} alt="logo" width="90px" height="90px" />
                    }

                    {!state.logoBlob &&
                        <Flex
                            width="65px"
                            height="43px"
                            borderRadius="4px"
                            border="1px dashed rgba(0, 0, 0, 0.2)"
                            align="center"
                            justify="center"
                            fontWeight="700"
                            color={data?.themes_io ? data?.themes_io.primary_color : state.themeCertificate.primary_color}
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
                    color={data?.themes_io ? data?.themes_io.primary_color : state.themeCertificate.primary_color}
                >
                    {data?.name ? data.name : 'Emerson Lemos de Andrade'}
                </Text>

                <Text
                    mt="8px"
                    color={data?.themes_io ? data?.themes_io.secondary_color : state.themeCertificate.secondary_color}
                    fontWeight="500"
                    fontSize="12px"
                >
                    {data?.themes_io?.graduated_in ? data?.themes_io.graduated_in : state.themeCertificate.graduated_in ? state.themeCertificate.graduated_in : 'Graduado em'}
                </Text>

                <Text
                    mt="4px"
                    color={data?.themes_io ? data?.themes_io.primary_color : state.themeCertificate.primary_color}
                    fontWeight="700"
                    fontSize="15px"
                >
                    {data?.courses_io?.title ? data?.courses_io.title : state.courseDetails.title ? state.courseDetails.title : 'Curso de Kali Linux'}
                </Text>

                <Flex
                    position="relative"
                    height="50px"
                    borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                    width="100%"
                    maxWidth="270px"
                >
                    {signatureImg &&
                        <Image
                            src={signatureImg}
                            alt="signature"
                            mx="auto"
                        />
                    }
                </Flex>

                <Text
                    fontSize="10px"
                    mt="10px"
                    color={data?.themes_io ? data?.themes_io?.secondary_color : state.themeCertificate.secondary_color}
                >
                    {data?.themes_io?.footer_signature ? data?.themes_io?.footer_signature : state.themeCertificate.footer_signature ? state.themeCertificate.footer_signature : 'Coordenador do curso'}
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
                {data?.themes_io?.title ? data?.themes_io?.title : state.themeCertificate.title ? state.themeCertificate.title : 'CERTIFICADO DE CONCLUSÃO'}
            </Text>

            <Text
                position="absolute"
                top="62px"
                width="100%"
                textAlign="center"
                fontWeight="12px"
                color="rgba(255,255,255,0.5)"
            >
                {data?.themes_io?.subtitle ? data?.themes_io?.subtitle : state.themeCertificate.subtitle ? state.themeCertificate.subtitle : 'Subtitle'}
            </Text>

            <Flex
                position="absolute"
                width="100%"
                bottom="0"
                height="40px"
                justify="space-between"
                paddingX="50px"
                fontSize="10px"
                color={state.themeCertificate.secondary_color}
            >
                <Text>Data de emissão: {localDate}</Text>
                <Text>Código: {data?.id_view}</Text>
            </Flex>

        </Box>
    )
}

export default CertificatePreview
