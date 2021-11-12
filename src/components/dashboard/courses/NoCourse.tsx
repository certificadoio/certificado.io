import { Flex, Image, Text } from '@chakra-ui/react'

const NoCourse: React.FC = () => {
    return (
        <Flex
            align="center"
            justify="center"
            paddingTop="50px"
            direction="column"
            mx="auto"
        >
            <Image src="/assets/icons/box-empty.svg" alt="caixa-vazia" />

            <Text
                marginTop="10px"
                fontSize="16px"
                fontWeight="500"
                lineHeight="24px"
                color="rgba(0,0,0,0.4)"
                textAlign="center"
            >
                Oooppss... <br />Não encontramos cursos por aqui.
            </Text>
        </Flex>
    )
}

export default NoCourse