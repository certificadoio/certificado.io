import { Flex, Image, Link as A } from '@chakra-ui/react'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <Flex
            background="#f5f5f5"
            width="100%"
            height="60px"
            padding="0 25px"

            align="center"
            justify="space-between"
        >
            <Flex mx={["auto", "0"]}>
                <Image src="/assets/logo-copyrgray.svg" alt="logo with copyright" />
            </Flex>

            <Flex
                color="#909090"
                display={["none", "flex"]}
            >
                <Link href="/terms">
                    <A
                        fontWeight="500"
                        fontSize="12px"
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
