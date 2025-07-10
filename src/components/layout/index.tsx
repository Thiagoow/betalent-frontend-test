import styled from 'styled-components';
import { Header } from './Header';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

const ContentContainer = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium32};
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};
