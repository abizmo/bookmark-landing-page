import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  margin-inline: auto;
  width: min(70rem, calc(100% - 32px));
  width: ${({ theme, maxWidth, padding }) =>
    `min(${maxWidth || theme.sizes.maxWidth}, calc(100% - ${
      padding || theme.padding.default
    }))`};
`;

export default Container;
