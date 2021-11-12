import { Flex } from '@chakra-ui/react'

const WrapperCertificates: React.FC = ({ children }) => {
    return (
        <Flex
            maxWidth="1100px"
            padding="15px 25px"
            flexWrap="wrap"
            justify="space-between"
        >
            {children}
        </Flex>
    )
}

export default WrapperCertificates
