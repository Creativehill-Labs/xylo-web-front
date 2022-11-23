import React, { FC } from 'react';
import styled from 'styled-components';

const SubmitBtn = styled.input<ISubmitBtn>`
  background-color: ${({ color = `#ffffff` }) => color};
  width: 168px;
  height: 43px;
  padding: 12px 20px;
  border: none;
  border-radius: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

interface ISubmitBtn {
  color?: string;
}

const SubmitRequestButton: FC<ISubmitBtn> = ({ color }) => {
  return <SubmitBtn color={color} type="button" value="Submit a request" />;
};

export default SubmitRequestButton;
