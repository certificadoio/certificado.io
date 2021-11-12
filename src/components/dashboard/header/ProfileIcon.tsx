import { Flex, Box, Text } from '@chakra-ui/react'

export default function ProfileIcon() {
    return (
        <Flex
            display={["none", "none", "flex"]}
            align="center"
        >
            <Text
                marginRight="16px"
            >
                Nome do usuário
            </Text>

            <Box
                width="32px"
                height="32px"
                background="orangered"
                borderRadius="50px"
            />
        </Flex>
    )
}
