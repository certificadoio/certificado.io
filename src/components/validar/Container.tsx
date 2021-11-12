import { Flex } from '@chakra-ui/react'

const Container: React.FC = ({ children }) => {
    return (
        <Flex
            background="#f5f5f5"
            minH="calc(100vh - 80px - 60px)"
            padding="25px"
        >
            {children}
        </Flex>
    )
}

export default Container
