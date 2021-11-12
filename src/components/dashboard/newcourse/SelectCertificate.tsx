import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { theme } from '../../../styles/theme'

const SelectCertificate = () => {
    return (
        <Flex
            background="#fff"
            direction="column"
            padding="20px 25px"
            flex="1"
            borderTopRadius="5px"
        >

            <Flex align="center" direction="column">
                <Image src="/assets/certificate.svg" alt="certificado" width="300px" />
                <Box
                    boxSizing="content-box"
                    display="grid"
                    placeItems="center"
                    marginTop="15px"
                    width="32px"
                    height="32px"
                    background={theme.green400}
                    borderRadius="50px"

                    border="5px solid #fff"
                    boxShadow="0px 0px 0px 1px rgba(0,0,0,0.08)"
                >
                    <FaCheck color="#fff" />
                </Box>
            </Flex>

        </Flex>
    )
}

export default SelectCertificate
