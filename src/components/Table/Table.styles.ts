import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.little08};
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TableHeaderCell = styled.th<{
  $hideOnMobile?: boolean;
  $hideOnDesktop?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing.regular16};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: left;

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `}

  ${({ $hideOnDesktop }) =>
    $hideOnDesktop &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;

export const TableRow = styled.tr<{ $isClickable?: boolean }>`
  margin-bottom: 1px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: background-color 0.25s ease;

  ${({ $isClickable }) =>
    $isClickable &&
    css`
      @media (max-width: 767px) {
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    `}
`;

export const TableCell = styled.td<{
  $hideOnMobile?: boolean;
  $hideOnDesktop?: boolean;
  $alignCenter?: boolean;
}>`
  padding: 8px ${({ theme }) => theme.spacing.regular16};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.colors.black};
  vertical-align: middle;

  @media (max-width: 767px) {
    padding: 12px ${({ theme }) => theme.spacing.regular16};
  }

  ${({ $alignCenter }) =>
    $alignCenter &&
    css`
      text-align: center;
    `}

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `}

  ${({ $hideOnDesktop }) =>
    $hideOnDesktop &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChevronIcon = styled.img<{ $isExpanded: boolean }>`
  width: 32px;
  height: 32px;
  transition: transform 0.25s ease;
  transform: ${({ $isExpanded }) =>
    $isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
`;

export const ExpandedRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ExpandedCell = styled.td`
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding-bottom: ${({ theme }) => theme.spacing.regular16};
`;

export const ExpandedContent = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing.regular16} auto;
  padding: 0 ${({ theme }) => theme.spacing.regular20};
  display: flex;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({ theme }) => theme.spacing.regular20};
    right: ${({ theme }) => theme.spacing.regular20};
    border-bottom: 1px dotted ${({ theme }) => theme.colors.gray[10]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ExpandedLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.black};
`;

export const ExpandedValue = styled.p`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.colors.black};
`;

export const LoadingContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium40};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[20]};
`;
