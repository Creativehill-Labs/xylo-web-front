import { HTMLAttributes } from 'react';
import styled, { CSSObject } from 'styled-components';
import Box from './Box';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: CSSObject['flexDirection'];
  justifyContent?: CSSObject['justifyContent'];
  alignItems?: CSSObject['alignItems'];
}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export default Flex;
