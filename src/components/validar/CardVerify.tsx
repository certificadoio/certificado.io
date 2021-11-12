import { Flex, Text, Input, Button, Image } from '@chakra-ui/react'
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
    certificateId: string,
    setCertificateId: (id: string) => void,
    getCertificate: () => void,
    loading: boolean
}

const CardVerify: React.FC<IProps> = ({ loading, certificateId, setCertificateId, getCertificate }) => {

    return (
        <Flex
            margin={["0 auto", "0 auto", "auto"]}
            width="100%"
            maxWidth="920px"
            height="max-content"
            background="#fff"
            padding={["20px", "40px", "40px", "70px 90px"]}
            borderRadius="4px"
            justify="space-between"
        >
            <Flex
                direction="column"
            >

                <Text
                    fontWeight="700"
                    fontSize="24px"
                    marginBottom="16px"
                >
                    Verifique o seu certificado
                </Text>

                <Text
                    fontSize="16px"
                    fontWeight="400"
                    color="#666"
                    maxWidth="425px"
                >
                    Para verificar a autenticidade do certificado emitido pelo certificado.io,
                    &nbsp;informe o código localizado na parte inferior do certificado.
                </Text>

                <Flex
                    align={["initial", "center"]}
                    direction={["column", "row"]}
                    marginTop="30px"
                >
                    <Input
                        maxWidth={["100%", "251px"]}
                        placeholder="Código do Certificado"
                        defaultValue={certificateId}
                        onChange={event => setCertificateId(event.target.value)}
                    />

                    <Button
                        background={theme.blue500}
                        color="#fff"
                        marginTop={["10px", "0"]}
                        marginLeft={["0", "15px"]}
                        minW="158px"
                        fontSize="14px"

                        _hover={{
                            background: theme.blue600
                        }}

                        onClick={getCertificate}
                        isLoading={loading}
                    >
                        Verificar código
                    </Button>
                </Flex>
            </Flex>

            <Flex
                display={["none", "none", "flex"]}
            >
                <Image src="/assets/io.svg" alt="io" />
            </Flex>
        </Flex>
    )
}

export default CardVerify
