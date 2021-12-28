import { Flex, Link as A, Text, Image } from '@chakra-ui/react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Link from 'next/link'
import { theme } from '../../styles/theme'
import React from 'react'

const Header: React.FC = () => {
    return (
        <Flex
            height="80px"
            background="#fff"

            align="center"
            justify="space-between"
        >

            <Flex
                width="100%"
                maxWidth="1100px"
                mx="auto"

                align="center"
                justify="space-between"
                px="25px"
            >
                <A href="https://certificado.io/">
                    <Image
                        src="/assets/logoMenuDashboard.svg"
                        alt="logo"
                        width="158px"
                    />
                </A>


                <A href="https://certificado.io/">
                    <Flex
                        align="center"
                    >
                        <MdKeyboardArrowLeft fontSize="30px" color={theme.blue500} />
                        <Text
                            display={["none", "inline"]}
                        >
                            Voltar para o site
                        </Text>
                    </Flex>
                </A>

            </Flex>
        </Flex>
    )
}

export default Header
