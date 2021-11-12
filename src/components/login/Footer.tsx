import { Flex, Image, Link as A } from '@chakra-ui/react'

import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <Flex
            width="100%"
            height="60px"
            padding="0 25px"

            align="center"
            justify="space-between"
        >
            <Flex mx={["auto", "0"]}>
                <Image src="/assets/logo-copyr.svg" alt="logo with copyright" />
            </Flex>

            <Flex
                display={["none", "flex"]}
            >
                <Link href="/terms">
                    <A
                        fontWeight="500"
                        fontSize="12px"
                        color="#fff"
                        lineHeight="18px"
                        mr="16px"
                    >
                        Termos de uso
                    </A>
                </Link>

                <Link href="/politics">
                    <A
                        fontWeight="500"
                        fontSize="12px"
                        color="#fff"
                        lineHeight="18px"
                    >
                        Política de privacidade
                    </A>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Footer