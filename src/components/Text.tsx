import styled from 'styled-components';

interface TextProps {
  display?: string;
  size?: string;
  weight?: string;
  margin?: string;
  color?: string;
}

const Text = styled.span<TextProps>`
  display: ${({ display }) => display};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  line-height: normal;
`;

export default Text;
