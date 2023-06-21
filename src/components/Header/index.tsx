import styled, { css } from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Container, SROnly } from '../UI';
import closeIcon from '../../assets/images/icon-close.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import { Button } from '..';
import theme from '../../theme/theme';

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

const MobileNavToggle = styled.button`
  border: none;
  background-color: transparent;
`;

interface HeaderContextType {
  isOpen: boolean;
  toggleMobileNav: () => void;
}

const HeaderContext = createContext<HeaderContextType | null>(null);

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

function Header({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  const toggleMobileNav = () => setIsOpen((prev) => !prev);

  return (
    <HeaderContext.Provider value={{ isOpen, toggleMobileNav }}>
      <HeaderContainer isOpen={isOpen}>
        <Container>
          <Flex>{children}</Flex>
        </Container>
      </HeaderContainer>
    </HeaderContext.Provider>
  );
}

function HeaderLogo({ children }: PropsWithChildren) {
  return <a href='/'>{children}</a>;
}

Header.Logo = HeaderLogo;

function HeaderNavBar({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);
  const context = useContext(HeaderContext);
  if (!context) throw new Error('must be used within a HeaderProvider');
  const { isOpen, toggleMobileNav } = context;

  return (
    <>
      {!isDesktop && (
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
      )}
      {(isOpen || isDesktop) && children}
    </>
  );
}

Header.NavBar = HeaderNavBar;

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

function HeaderNavList({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);

  return (
    <NavListContainer>
      <NavList role='list'>{children}</NavList>
      <Button variant={isDesktop ? 'accent' : 'outline'} fullWidth>
        Login
      </Button>
    </NavListContainer>
  );
}

Header.NavList = HeaderNavList;

const ItemContainer = styled.li`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[618]};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[618]};
  }

  @media (${({ theme }) => theme.breakPoints.large}) {
    border: none;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

function HeaderNavItem({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <ItemContainer>
      <a href={href}>{children}</a>
    </ItemContainer>
  );
}

Header.NavItem = HeaderNavItem;

const SocialsContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
`;

function HeaderSocials({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);

  return !isDesktop && <SocialsContainer>{children}</SocialsContainer>;
}

Header.Socials = HeaderSocials;

interface SocialLinkType {
  alt: string;
  icon: string;
  href: string;
}

function HeaderSocialLink({ alt, icon, href }: SocialLinkType) {
  return (
    <a href={href}>
      <img src={icon} alt={alt} />
    </a>
  );
}

Header.SocialLink = HeaderSocialLink;

export default Header;
