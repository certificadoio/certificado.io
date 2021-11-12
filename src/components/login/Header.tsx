import { Flex, Button } from '@chakra-ui/react'
import router from 'next/router'
import { theme } from '../../styles/theme'

const Header: React.FC = () => {
    return (
        <Flex
            height="60px"
            align="center"
            justify="flex-end"
            padding="0 29px"
        >
            <Button
                background={theme.green500}
                color="#fff"
                borderRadius="4px"

                onClick={() => router.push('/cadastrar')}

                _hover={{
                    background: theme.green300
                }}
            >
                Crie a sua conta
            </Button>
        </Flex>
    )
}

export default Header