import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.spacing.medium60};
  padding: 0 ${({ theme }) => theme.spacing.regular20};
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  height: 34px;
`;
