import { HTMLAttributes } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  position?: CSSObject['position'];
  margin?: CSSObject['margin'];
  padding?: CSSObject['padding'];
}

const Box = styled.div<BoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export default Box;
