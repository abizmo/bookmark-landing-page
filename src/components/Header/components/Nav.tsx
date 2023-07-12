import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import useMediaQuery from '../../../hooks/useMediaQuery';
import theme from '../../../theme/theme';
import { Button } from '../..';

const NavListContainer = styled.nav`
  flex-basis: 100%;
  text-transform: uppercase;
  color: white;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.lg};
  text-align: center;
  margin-top: 2.5rem;

  @media (${({ theme }) => theme.breakPoints.large}) {
    flex-basis: auto;
    display: flex;
    align-items: center;
    gap: 3rem;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin-top: 0;
  }
`;

const NavList = styled.ul`
  display: grid;
  gap: 0.25rem;
  margin-bottom: 1.5rem;

  @media (${({ theme }) => theme.breakPoints.large}) {
    display: flex;
    gap: 3rem;
    margin-bottom: 0;
  }
`;

export function HeaderNavList({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);

  return (
    <NavListContainer>
      <NavList role='list'>{children}</NavList>
      <Button as='link' variant={isDesktop ? 'accent' : 'outline'} fullWidth>
        Login
      </Button>
    </NavListContainer>
  );
}

const ItemContainer = styled.li`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[618]};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[618]};
  }

  @media (${({ theme }) => theme.breakPoints.large}) {
    &,
    &:first-child {
      border: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export function HeaderNavItem({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <ItemContainer>
      <a href={href}>{children}</a>
    </ItemContainer>
  );
}
