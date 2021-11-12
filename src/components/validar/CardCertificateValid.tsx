import { Flex, Text, Input, Button, Image, Box } from '@chakra-ui/react'
import router from 'next/router'
import { useState } from 'react'
import { theme } from '../../styles/theme'

interface ICertificate {
    courses_io: {
        title: string
    },
    created_at: string,
    id: string,
    name: string,
    themes_io: {
        title: string
    }
}

interface IProps {
    certificate: ICertificate
}

const CardCertificateValid: React.FC<IProps> = ({ certificate }) => {

    console.log(certificate)

    let dateString = certificate?.created_at.substring(0, 10)
    let dateArray = dateString?.split('-') // yyyy-MM-dd
    let localDate = dateArray ? `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}` : ''

    return (
        <Flex
            margin={["0 auto", "0 auto", "auto"]}
            width="100%"
            maxWidth="920px"
            background="#fff"
            borderRadius="4px"
            justify="space-between"
            direction="column"
            position="relative"
        >
            <Flex
                margin={["0 auto", "0 auto", "auto"]}
                width="100%"
                maxWidth="920px"
                borderTopRadius="4px"
                height="265px"
                background="#fff"
                padding={["20px", "40px", "40px", "70px 90px"]}
                justify="space-between"
                direction="column"
                position="relative"
                borderBottom="1px solid rgba(0,0,0,0.1)"
            >
                <Flex
                    left="0"
                    right="0"
                    mx="auto"
                    mt="-100px"
                    position="absolute"
                    align="center"
                    direction="column"
                >
                    <Image
                        src="/assets/icons/likeCircle.svg"
                        alt="like"
                        width="82px"
                        height="82px"
                    />


                    <Text
                        mt="21px"
                        fontWeight="600"
                        fontSize="24"
                        fontFamily="Inter"
                        color="#BBC564"
                    >
                        Certificado válido!
                    </Text>

                    <Text
                        mt="10px"
                        fontSize="16px"
                        fontWeight="600"
                        color="#666"
                    >
                        Seu certificado foi verificado e está válido.
                    </Text>

                    <Button
                        mt="27px"
                        fontSize="14px"
                        fontWeight="600"
                        background={theme.blue500}
                        color="#fff"
                        padding={["6px 12px", "12px 24px"]}
                        borderRadius="5px"

                        _hover={{
                            background: theme.blue600
                        }}

                        onClick={() => {
                            router.push(`/c/${certificate.id}`)
                        }}

                    >
                        Acesse o certificado
                    </Button>
                </Flex>
            </Flex>
            <Flex
                margin={["0 auto", "0 auto", "auto"]}
                width="100%"
                maxWidth="920px"
                borderBottomRadius="4px"
                height="265px"
                background="#fff"
                padding={["20px", "40px", "40px", "47px 95px"]}
                direction="column"
            >
                <Text
                    fontWeight="500"
                >
                    Informações Gerais
                </Text>

                <Flex
                    mt="27px"
                >
                    <Box mr="50px">
                        <Text
                            fontSize="14px"
                            color="#666"
                        >
                            Código
                        </Text>
                        <Text
                            fontWeight="500"
                        >
                            {certificate.id}
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize="14px"
                            color="#666"
                        >
                            Emitido em
                        </Text>
                        <Text
                            fontWeight="500"
                        >
                            {localDate}
                        </Text>
                    </Box>
                </Flex>

                <Flex
                    mt="27px"
                    justify="space-between"
                >
                    <Box>
                        <Text
                            fontSize="14px"
                            color="#666"
                        >
                            Aluno
                        </Text>
                        <Text
                            fontWeight="500"
                        >
                            {certificate.name}
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize="14px"
                            color="#666"
                        >
                            Instituição
                        </Text>
                        <Text
                            fontWeight="500"
                        >
                            ?????
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize="14px"
                            color="#666"
                        >
                            Curso
                        </Text>
                        <Text
                            fontWeight="500"
                        >
                            {certificate.courses_io.title}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CardCertificateValid
