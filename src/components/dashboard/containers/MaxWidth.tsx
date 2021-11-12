import { Box } from '@chakra-ui/react'

const MaxWidth: React.FC = ({ children }) => {
    return (
        <Box
            maxWidth="1100px"
            mx="auto"
            height="100%"
        >
            {children}
        </Box>
    )
}

export default MaxWidth