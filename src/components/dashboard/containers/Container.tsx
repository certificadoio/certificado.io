import { Box } from '@chakra-ui/react'

const Container: React.FC = ({ children }) => {
    return (
        <Box
            height="100%"
            minHeight="calc(100vh - 60px)"
            background="#f5f5f5"
            position="relative"
        >
            {children}
        </Box>
    )
}

export default Container
