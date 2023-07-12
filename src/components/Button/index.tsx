import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
} from 'react';
import styled from 'styled-components';

const Anchor = styled.a<{ fullWidth: boolean }>`
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

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral[100]};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.neutral {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.neutral[600]};
    border: 2px solid ${({ theme }) => theme.colors.neutral[200]};
    box-shadow: ${({ theme }) => theme.shadows.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }

  &.accent {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.neutral[100]};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  &.outline {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.neutral[100]};
    border: 2px solid ${({ theme }) => theme.colors.neutral[100]};
    font-size: ${({ theme }) => theme.typography.size.lg};
    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      color: ${({ theme }) => theme.colors.neutral[900]};
    }
  }
`;

interface CommonProps {
  fullWidth?: boolean;
  variant?: 'primary' | 'neutral' | 'accent' | 'outline';
}

type ButtonProps =
  | ({ as: 'button' } & CommonProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'link' } & CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>);

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  if (props.as === 'button') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, as, ...rest } = props;
    return <button {...rest}>{children}</button>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant, as, fullWidth = false, children, ...rest } = props;
  return (
    <Anchor className={variant} fullWidth={fullWidth} {...rest}>
      {children}
    </Anchor>
  );
};

export default Button;
