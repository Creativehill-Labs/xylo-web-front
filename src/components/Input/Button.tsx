import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 132px;
  height: 54px;
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
}

const Button: FC<IButton> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
