import { Link as A, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import useGlobal from '../../../store/useGlobal'

const Logo: React.FC = () => {

    const global = useGlobal(state => state)

    return (
        <Box
            display={[global.showMobileMenu ? 'none' : 'block', global.showMobileMenu ? 'none' : 'block', "flex"]}
        >
            <A href="https://certificado.io/">
                <Image
                    src="/assets/logoMenuDashboard.svg"
                    alt="logo"
                    width="158px"
                />
            </A>
        </Box>
    )
}

export default Logo