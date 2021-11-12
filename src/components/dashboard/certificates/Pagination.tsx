import { Flex, Box, Text } from '@chakra-ui/react'
import { theme } from '../../../styles/theme'

const Pagination = () => {
    return (
        <Flex
            height="60px"
            width="100%"
            align="center"
            justify="flex-end"
        >

            <Box
                display="grid"
                placeItems="center"
                width="32px"
                height="32px"
                bg="#fff"
                borderRadius="4px"
                cursor="pointer"
            >
                <Text
                    color="rgba(53,53,53,0.6)"
                    fontWeight="700"
                >
                    {`<`}
                </Text>
            </Box>

            <Box
                display="grid"
                placeItems="center"
                width="32px"
                height="32px"
                bg={theme.blue500}
                borderRadius="4px"
                cursor="pointer"
                ml="12px"
            >
                <Text
                    fontSize="14px"
                    color="#fff"
                    fontWeight="700"
                >
                    {`1`}
                </Text>
            </Box>

            <Box
                display="grid"
                placeItems="center"
                width="32px"
                height="32px"
                bg="#fff"
                borderRadius="4px"
                cursor="pointer"
                ml="12px"
            >
                <Text
                    fontSize="14px"
                    color="rgba(53,53,53,0.6)"
                    fontWeight="700"
                >
                    {`2`}
                </Text>
            </Box>

            <Box
                display="grid"
                placeItems="center"
                width="32px"
                height="32px"
                bg="#fff"
                borderRadius="4px"
                cursor="pointer"
                ml="12px"
            >
                <Text
                    color="rgba(53,53,53,0.6)"
                    fontWeight="700"
                >
                    {`>`}
                </Text>
            </Box>


        </Flex>
    )
}

export default Pagination
