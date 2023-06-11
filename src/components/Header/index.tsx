import styled, { css } from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { Container, SROnly } from '../UI';
import NavWrapper from './components/NavWrapper';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import { Button } from '..';

const HeaderStyle = styled.header<{ isOpen: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  padding-top: 2.5rem;
  ${({ theme, isOpen }) =>
    isOpen &&
    css`
      background: ${theme.colors.neutral[995]};
      color: ${theme.colors.neutral[100]};
      inset: 0;

      & .logo-text,
      & .logo-primary {
        fill: white;
      }

      & .logo-neutral {
        fill: ${theme.colors.neutral[995]};
      }
    `}

  @media (min-width: 70em) {
    padding-top: 3rem;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  translate: -50%;
`;

const MobileNavToggle = styled.button`
  border: none;
  background-color: transparent;
`;

const MobileNav = styled.nav`
  margin-top: 2.5rem;
  margin-top: 1.5rem;

  & a {
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.neutral[100]};
    text-decoration: none;
    text-transform: uppercase;
  }

  & li + li {
    margin-top: 0.25rem;
  }

  & li:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[618]};
  }

  & li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[618]};
  }
`;

const MobileNavItem = styled.a`
  display: grid;
  place-content: center;
  height: 4rem;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const DesktopNavList = styled.ul`
  display: flex;
  gap: 3rem;

  & a {
    font-size: ${({ theme }) => theme.typography.size.xs};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
    color: ${({ theme }) => theme.colors.neutral[900]};
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

function Header({ logo: Logo, closeIcon, menuIcon, children }) {
  const isDesktop = useMediaQuery('(min-width: 70em)');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  const toggleMobileNav = () => setIsOpen((prev) => !prev);

  return (
    <HeaderStyle isOpen={isOpen}>
      <Container>
        <NavWrapper>
          <a href='/'>
            <Logo />
          </a>
          {!isDesktop ? (
            <MobileNavToggle
              onClick={toggleMobileNav}
              aria-controls='primary-navigation'
              aria-expanded='false'
            >
              {isOpen ? (
                <img src={closeIcon} alt='Close' aria-hidden='true' />
              ) : (
                <img src={menuIcon} alt='Menu' aria-hidden='true' />
              )}
              <SROnly>Menu</SROnly>
            </MobileNavToggle>
          ) : (
            <DesktopNav id='primary-navigation'>
              <DesktopNavList role='list'>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </DesktopNavList>
              <Button variant='accent' href='#'>
                Login
              </Button>
            </DesktopNav>
          )}
        </NavWrapper>
        {!isDesktop && isOpen && (
          <>
            <MobileNav id='primary-navigation'>
              <ul role='list'>
                <li>
                  <MobileNavItem href='#'>Features</MobileNavItem>
                </li>
                <li>
                  <MobileNavItem href='#'>Pricing</MobileNavItem>
                </li>
                <li>
                  <MobileNavItem href='#'>Contact</MobileNavItem>
                </li>
              </ul>
            </MobileNav>
            <Button variant='outline' fullWidth href='#'>
              Login
            </Button>
            <Icons>
              <a href='#'>
                <img src={iconFacebook} alt='facebook' />
              </a>
              <a href='#'>
                <img src={iconTwitter} alt='twitter' />
              </a>
            </Icons>
          </>
        )}
      </Container>
    </HeaderStyle>
  );
}

export default Header;
