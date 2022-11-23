import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button<IButton>`
  width: ${({ width = `132px` }) => width};
  height: ${({ height = `54px` }) => height};
  border: none;
  background-color: #aae112;
  border-radius: 8px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

interface IButton {
  children: ReactNode;
  width?: string;
  height?: string;
}

const Button: FC<IButton> = ({ width, height, children }) => {
  return (
    <ButtonStyle width={width} height={height}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
