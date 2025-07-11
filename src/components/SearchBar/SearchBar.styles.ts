import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.regular20};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  color: ${({ theme }) => theme.colors.black};
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 890px) {
    width: 286px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.regular16};
  padding-right: ${({ theme }) => theme.spacing.medium40};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  border: 1px solid ${({ theme }) => theme.colors.gray[10]};
  border-radius: ${({ theme }) => theme.spacing.little08};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[20]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.regular16};
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
