import { Link as A, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import useGlobal from '../../../store/useGlobal'

const Logo: React.FC = () => {

    const global = useGlobal(state => state)

    return (
        <Box
            display={[global.showMobileMenu ? 'none' : 'block', global.showMobileMenu ? 'none' : 'block', "flex"]}
        >
            <Link href="/">
                <A>
                    <Image
                        src="/assets/logoMenuDashboard.svg"
                        alt="logo"
                        width="158px"
                    />
                </A>
            </Link>
        </Box>
    )
}

export default Logo