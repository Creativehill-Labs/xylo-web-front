import React, { FC } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 471px;
  height: 54px;
  padding: 0 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #616161;
  caret-color: rgba(170, 225, 18, 1);
`;

interface IInputText {
  placeholder?: string;
}

const InputText: FC<IInputText> = ({ placeholder }) => {
  return <InputStyle type="text" placeholder={placeholder} />;
};

export default InputText;
