import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Text = styled.div<ITitle>`
  font-family: 'Montserrat', sans-serif;
  color: #202020;
  font-weight: 700;
  white-space: pre-line;

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
        font-size: 32px;
        line-height: 39px;
      `;
    }
    if (size === `quaternary`) {
      return `
        font-size: 24px;
        line-height: 29px;
      `;
    }
    if (size === `quinary`) {
      return `
        font-size: 20px;
        line-height: 19.5px;
      `;
    }
    if (size === `senary`) {
      return `
        font-size: 16px;
        line-height: 19.5px;
      `;
    }
    return ``;
  }}
`;

interface ITitle {
  size:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'quinary'
    | 'senary';
  children: ReactNode;
}

const Title: FC<ITitle> = ({ size, children }) => {
  return <Text size={size}>{children}</Text>;
};

export default Title;
