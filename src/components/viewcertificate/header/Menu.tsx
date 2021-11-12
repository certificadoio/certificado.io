import { Box, Flex, Text } from '@chakra-ui/react'

import { theme } from '../../../styles/theme'

import Link from 'next/link'
import useGlobal from '../../../store/useGlobal'

interface IProps {
    active?: boolean
    certificates?: boolean
}

const Menu: React.FC<IProps> = ({ active, certificates }) => {

    const global = useGlobal(state => state)

    return (
        <Flex
            display={global.showMobileMenu ? 'flex' : ["none", "none", "flex"]}
            width="max-content"
            height="80px"
            mx="auto"
        >

            <Link href="/">
                <a>
                    <Box
                        width="max-content"
                        padding="0 22px"
                        height="80px"
                        display="grid"
                        placeItems="center"

                        borderBottom={certificates ? '2px solid #fff' : `2px solid ${theme.blue500}`}

                        cursor="pointer"
                    >
                        <Text
                            fontSize="16px"
                            fontWeight={certificates ? '500' : '700'}
                            lineHeight="24px"
                            color={certificates ? '#666' : theme.blue500}
                        >
                            Cursos
                        </Text>
                    </Box>
                </a>
            </Link>

            <Link href="/certificados">
                <a>
                    <Box
                        width="max-content"
                        padding="0 22px"
                        height="80px"
                        display="grid"
                        placeItems="center"

                        cursor="pointer"

                        borderBottom={!certificates ? '2px solid #fff' : `2px solid ${theme.blue500}`}
                    >
                        <Text
                            fontSize="16px"
                            fontWeight={certificates ? '700' : '500'}
                            lineHeight="24px"
                            color={!certificates ? '#666' : theme.blue500}
                        >
                            Certificados
                        </Text>
                    </Box>
                </a>
            </Link>

        </Flex>
    )
}

export default Menu