import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

import errorIcon from '../../assets/images/icon-error.svg';

const FormStyled = styled.form`
  display: grid;
  gap: 1rem;

  @media (${({ theme }) => theme.breakPoints.large}) {
    display: flex;
  }
`;

const GroupInput = styled.div<{ error: boolean }>`
  position: relative;
  flex: 1;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.accent : theme.colors.neutral[100]};
`;

const Input = styled.input`
  display: block;
  padding-inline: 1rem;
  height: 3rem;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  color: ${({ theme }) => theme.colors.neutral[900]};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral[650]};
  }
`;

const Error = styled.em`
  background: ${({ theme }) => theme.colors.accent};
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.typography.size['2xs']};
  display: block;
`;

const ErrorIcon = styled.img`
  position: absolute;
  right: 1rem;
  top: 0.875rem;
`;

function Form({ children }: PropsWithChildren) {
  return <FormStyled>{children}</FormStyled>;
}

function FormInput({ ...props }) {
  const [error, setError] = useState(true);

  return (
    <GroupInput error={error}>
      <Input {...props} />
      {error && (
        <>
          <ErrorIcon src={errorIcon} />
          <Error>Whoops, make sure It's an email</Error>
        </>
      )}
    </GroupInput>
  );
}

Form.Input = FormInput;

export default Form;
