import logo from '@/assets/logos/logo.svg';
import { HeaderContainer, Logo } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="BeTalent Logo" />
    </HeaderContainer>
  );
}

export default Header;
