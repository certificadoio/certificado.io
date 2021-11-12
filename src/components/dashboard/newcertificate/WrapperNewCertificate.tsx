import { Flex } from '@chakra-ui/react'
import React from 'react'

const WrapperNewCertificate: React.FC = ({ children }) => {
    return (
        <Flex
            maxWidth="730px"
            mx="auto"
            direction="column"
            height="100%"
            padding={["0", "40px"]}
        >


            {children}
        </Flex>
    )
}

export default WrapperNewCertificate
