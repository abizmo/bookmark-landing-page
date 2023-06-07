import { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
};

const ButtonStyled = styled.a<{ fullWidth: boolean }>`
  display: grid;
  place-content: center;
  padding-inline: 24px;
  border-radius: 6px;
  height: 48px;
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
`;

const ButtonPrimary = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral[100]};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonSecondary = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[600]};
  border: 2px solid ${({ theme }) => theme.colors.neutral[200]};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

const ButtonAccent = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.neutral[100]};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ButtonOutline = styled(ButtonStyled)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral[100]};
  border: 2px solid ${({ theme }) => theme.colors.neutral[100]};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button = ({
  fullWidth = false,
  variant = 'primary',
  children,
  ...rest
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  switch (variant) {
    case 'secondary':
      return (
        <ButtonSecondary fullWidth={fullWidth} {...rest}>
          {children}
        </ButtonSecondary>
      );
    case 'accent':
      return (
        <ButtonAccent fullWidth={fullWidth} {...rest}>
          {children}
        </ButtonAccent>
      );
    case 'outline':
      return (
        <ButtonOutline fullWidth={fullWidth} {...rest}>
          {children}
        </ButtonOutline>
      );
    default:
      return (
        <ButtonPrimary fullWidth={fullWidth} {...rest}>
          {children}
        </ButtonPrimary>
      );
  }
};

export default Button;
