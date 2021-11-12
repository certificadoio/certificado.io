import Container from './Container'
import Logo from './Logo'
import MenuMobileIcon from './MenuMobileIcon'
import Menu from './Menu'
import ProfileIcon from './ProfileIcon'
import useGlobal from '../../../store/useGlobal'

interface IProps {
    certificates?: boolean
}

const Header: React.FC<IProps> = ({ certificates }) => {

    return (
        <>
            <Container>
                <Logo />
                <Menu certificates={certificates} />
                <ProfileIcon />
                <MenuMobileIcon />
            </Container>
        </>
    )
}

export default Header