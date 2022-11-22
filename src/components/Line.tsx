import styled from 'styled-components';

interface LineProps {
  color?: string;
  margin?: string;
}

const Line = styled.hr<LineProps>`
  border: none;
  border-top: 1px solid ${({ color = `#000` }) => color};
  margin: ${({ margin = 0 }) => margin};
`;

export default Line;
