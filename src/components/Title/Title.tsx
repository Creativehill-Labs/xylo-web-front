import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Text = styled.div<ITitle>`
  font-family: 'Montserrat', sans-serif;
  color: #202020;
  font-weight: 700;

  ${({ size }) => {
    if (size === `primary`) {
      return `
        font-size: 60px;
        line-height: 73px;
      `;
    }
    if (size === `secondary`) {
      return `
        font-size: 48px;
        line-height: 39px;
      `;
    }
    if (size === `tertiary`) {
      return `
        font-size: 20px;
        line-height: 24px;
      `;
    }
    if (size === `quaternary`) {
      return `
        font-size: 20px;
        line-height: 24px;
      `;
    }
    return ``;
  }}
`;

interface ITitle {
  size: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  children: ReactNode;
}

const Title: FC<ITitle> = ({ size, children }) => {
  return <Text size={size}>{children}</Text>;
};

export default Title;
