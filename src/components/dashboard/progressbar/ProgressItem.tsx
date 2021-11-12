import { Flex, Box, Text } from '@chakra-ui/react'

import { theme } from '../../../styles/theme'

interface IProps {
    number: number,
    label: string,
    isSelected: boolean
}

const ProgressItem: React.FC<IProps> = ({ number, label, isSelected }) => {

    return (
        <Flex
            display={[isSelected ? 'flex' : 'none', isSelected ? 'flex' : 'none', "flex"]}
            align="center"
            padding="0 25px"
        >
            <Box
                boxSizing="content-box"
                display="grid"
                placeItems="center"
                width="32px"
                height="32px"
                borderRadius="500px"
                background={isSelected ? theme.green500 : '#CECECE'}

                border={isSelected ? `7px solid ${theme.green100}` : ''}
            >
                <Text
                    fontWeight="700"
                    fontSize="16px"
                    color="#fff"
                >
                    {number}
                </Text>
            </Box>

            <Text
                marginLeft="10px"
                fontWeight="500"
                fontSize="14px"
                color="#191919"
            >
                {label}
            </Text>
        </Flex>
    )
}

export default ProgressItem