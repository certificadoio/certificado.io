import { Flex, Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import useNewCourse from '../../../store/useNewCourse'
import ActionPreview from './ActionPreview'
import ActionsCustomizeCertificate from './ActionsCustomizeCertificate'
import CertificatePreview from './CertificatePreview'
import ColorsCustomizeCertificate from './ColorsCustomizeCertificate'
import DetailsCustomizeCertificate from './DetailsCustomizeCertificate'

const CustomizeCertificate = () => {

    const [designSelected, setDesignSelected] = useState(false)
    const state = useNewCourse(state => state)

    return (
        <Flex>
            <Flex
                background="#fff"
                direction="column"
                flex="1"
                borderTopLeftRadius="5px"
                maxWidth={["", "", "320px"]}
                overflowY="auto"
            >

                <ActionsCustomizeCertificate state={{ designSelected, setDesignSelected }} />

                <Box paddingX="25px" mt="10px">
                    {state.errors.map((erro, index) => (
                        <Text
                            key={index}
                            padding="5px"
                            background="#EE9494"
                            borderRadius="4px"
                            marginY="2px"
                        >
                            {erro}
                        </Text>
                    ))}
                </Box>

                {!designSelected
                    ? <DetailsCustomizeCertificate />
                    : <ColorsCustomizeCertificate />
                }

            </Flex>

            {/* Certificate theme */}
            <Flex
                display={["none", "none", "flex"]}
                background="#fff"
                direction="column"
                flex="1"
                borderTopRightRadius="5px"
                borderLeft="1px solid #f5f5f5"
            >

                <ActionPreview />

                <Flex
                    padding="24px"
                    flex="1"
                    minHeight="500px"
                >
                    <CertificatePreview />
                </Flex>

            </Flex>
        </Flex>
    )
}

export default CustomizeCertificate
