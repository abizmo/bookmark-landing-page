import styled, { css } from 'styled-components';
import { PropsWithChildren, useEffect } from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';
import theme from '../../theme/theme';
import { Container, Flex } from '../UI';

import { HeaderLogo } from './components/Logo';
import { HeaderNavItem, HeaderNavList } from './components/Nav';
import { HeaderNavBar } from './components/NavBar';
import { HeaderSocialLink, HeaderSocials } from './components/Socials';
import HeaderProvider, { useHeader } from './context';

const HeaderContainer = styled.header<{ isOpen: boolean }>`
  inset: 0 0 auto;
  padding-top: 2.5rem;
  & + * {
    margin-top: 5rem;
  }

  ${({ theme, isOpen }) =>
    isOpen &&
    css`
      position: fixed;
      background: ${theme.colors.neutral[995]};
      color: ${theme.colors.neutral[100]};
      inset: 0;
      user-select: none;
      touch-action: none;

      & .logo-text,
      & .logo-primary {
        fill: white;
      }

      & .logo-neutral {
        fill: ${theme.colors.neutral[995]};
      }
      & + * {
        margin-top: 9rem;
      }
    `}

  @media (${({ theme }) => theme.breakPoints.large}) {
    padding-top: 3rem;
    position: static;
    & + * {
      margin-top: 7rem;
    }
  }
`;

function HeaderWrapper({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);
  const { isOpen, closeMenu } = useHeader();

  useEffect(() => {
    if (isDesktop) closeMenu();
  }, [isDesktop, closeMenu]);

  return (
    <HeaderContainer isOpen={isOpen}>
      <Container>
        <Flex>{children}</Flex>
      </Container>
    </HeaderContainer>
  );
}

function Header({ children }: PropsWithChildren) {
  return (
    <HeaderProvider>
      <HeaderWrapper>{children}</HeaderWrapper>
    </HeaderProvider>
  );
}

Header.Logo = HeaderLogo;

Header.NavBar = HeaderNavBar;

Header.NavList = HeaderNavList;

Header.NavItem = HeaderNavItem;

Header.Socials = HeaderSocials;

Header.SocialLink = HeaderSocialLink;

export default Header;
