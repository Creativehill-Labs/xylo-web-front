import styled from 'styled-components';

interface TextProps {
  size?: string;
  weight?: string;
  margin?: string;
  padding?: string;
}

const Text = styled.span<TextProps>`
  display: inline-block;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  line-height: 1;
`;

export default Text;
