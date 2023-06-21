import styled from 'styled-components';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { PropsWithChildren } from 'react';
import theme from '../../../theme/theme';

const SocialsContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
`;

export function HeaderSocials({ children }: PropsWithChildren) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);

  return !isDesktop && <SocialsContainer>{children}</SocialsContainer>;
}

interface SocialLinkType {
  alt: string;
  icon: string;
  href: string;
}

export function HeaderSocialLink({ alt, icon, href }: SocialLinkType) {
  return (
    <a href={href}>
      <img src={icon} alt={alt} />
    </a>
  );
}
