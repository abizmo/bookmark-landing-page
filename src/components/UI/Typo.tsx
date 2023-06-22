import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import theme from '../../theme/theme';

const Typo1 = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const TypoP = styled.p<{ isDesktop: boolean }>`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme, isDesktop }) =>
    isDesktop
      ? theme.typography.lineHeight.normal
      : theme.typography.lineHeight.relaxed};
  letter-spacing: ${({ theme, isDesktop }) =>
    !isDesktop && theme.typography.letterSpacing.wide};
`;

interface Typo {
  level?: 'h1' | 'p';
}

function Typo({ children, level }: PropsWithChildren<Typo>) {
  const isDesktop = useMediaQuery(`(${theme.breakPoints.large})`);

  if (level === 'h1') return <Typo1>{children}</Typo1>;
  return <TypoP isDesktop={isDesktop}>{children}</TypoP>;
}

export default Typo;
