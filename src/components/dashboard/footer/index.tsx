import { Flex, Link as A, Image } from '@chakra-ui/react'
import Link from 'next/link'

interface IProps {
    transparent?: boolean
    background?: string
}

const Footer: React.FC<IProps> = ({ transparent, background }) => {
    return (
        <Flex
            height="60px"
            padding={["0", "0", "0 55px"]}
            mx="auto"

            background={background ? background : "#f5f5f5"}

            align="center"
            justify={["center", "center", "space-between"]}
        >

            {background
                ? <Image src="/assets/logo-copyr.svg" alt="logo with copyright" />
                : <Image src="/assets/logo-copyrgray.svg" alt="logo with copyright" />
            }

            <Flex
                display={["none", "none", "flex"]}
            >
                <Link href="/terms">
                    <A
                        fontWeight="500"
                        fontSize="12px"
                        lineHeight="18px"
                        mr="16px"
                        color={background ? "#fff" : "#8c8c8c"}
                    >
                        Termos de uso
                    </A>
                </Link>

                <Link href="/politics">
                    <A
                        fontWeight="500"
                        fontSize="12px"
                        lineHeight="18px"
                        color={background ? "#fff" : "#8c8c8c"}
                    >
                        Política de privacidade
                    </A>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Footer