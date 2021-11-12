import { Flex } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const Container: React.FC = ({ children }) => {
    return (
        <Flex
            background={theme.blue500}
            minHeight="100vh"
            direction="column"
        >
            {children}
        </Flex>
    )
}

export default Container