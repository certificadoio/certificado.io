import { Flex } from '@chakra-ui/react'

const Container: React.FC = ({ children }) => {
    return (
        <Flex
            height="80px"
            background="#fff"

            align="center"
            justify="space-between"
        >

            <Flex
                width="100%"
                maxWidth="1100px"
                mx="auto"

                align="center"
                justify="space-between"
                px="25px"
            >
                {children}
            </Flex>
        </Flex>
    )
}

export default Container