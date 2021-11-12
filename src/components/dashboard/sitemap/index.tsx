import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useNewCourse from '../../../store/useNewCourse'

import Link from 'next/link'

import { theme } from '../../../styles/theme'

const SiteMap: React.FC = () => {

    const router = useRouter()
    const state = useNewCourse(state => state)

    return (
        <Flex
            background="#fff"
            height="45px"

            borderY="1px solid rgba(0,0,0,0.1)"

            align="center"
        >

            <Flex
                width="100%"
                maxWidth="1100px"
                padding="0 25px"
                mx="auto"

                fontSize="14px"
                fontWeight="500"
                lineHeight="21px"
            >

                <Link href={router.pathname === '/curso' ? '/' : '/certificados'}>
                    <a>
                        <Text
                            color={theme.blue500}
                        >
                            {router.pathname === '/curso' ? 'Cursos' : 'Certificados'}
                        </Text>
                    </a>
                </Link>

                <Text
                    mx="10px"
                    color="rgba(0,0,0,0.4)"
                >
                    /
                </Text>

                <Text
                    color="rgba(0,0,0,0.4)"
                >
                    {router.pathname === '/curso' ? state.editMode ? 'Atualizar informações' : 'Novo curso' : 'Novo certificado'}
                </Text>
            </Flex>

        </Flex>
    )
}

export default SiteMap