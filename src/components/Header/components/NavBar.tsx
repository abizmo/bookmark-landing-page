import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import theme from '../../../theme/theme';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { SROnly } from '../../UI';

import closeIcon from '../assets/icon-close.svg';
import menuIcon from '../assets/icon-hamburger.svg';
import { useHeader } from '../context';

const MobileNavToggle = styled.button`
  border: none;
  background-color: transparent;
`;

export function HeaderNavBar({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);
  const { isOpen, toggleMenu } = useHeader();

  return (
    <>
      {!isDesktop && (
        <MobileNavToggle
          onClick={toggleMenu}
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
