import { Box } from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import useGlobal from '../../../store/useGlobal'

export default function MenuMobileIcon() {

    const global = useGlobal(state => state)

    return (
        <Box
            display={["inline", "inline", "none"]}
            onClick={global.toggleMobileMenu}
            cursor="pointer"
        >
            {
                global.showMobileMenu
                    ? <FaTimes fontSize="1.2rem" />
                    : <FaBars fontSize="1.2rem" />
            }
        </Box>
    )
}
