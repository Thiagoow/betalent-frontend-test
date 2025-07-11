import styled from 'styled-components';
import logo from '@/assets/logos/logo.svg';

const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.spacing.medium60};
  padding: 0 ${({ theme }) => theme.spacing.regular20};
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  inset: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 2.125rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="BeTalent Logo" />
    </HeaderContainer>
  );
}

export default Header;
