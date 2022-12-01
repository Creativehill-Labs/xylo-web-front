import React, { FC } from 'react';
import styled from 'styled-components';

const KeyServiceMockStyle = styled.div<IKeyServiceMock>`
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% 80%;
  width: 100%;
  height: 100%;
`;

interface IKeyServiceMock {
  src: string;
}

const KeyServiceMock: FC<IKeyServiceMock> = ({ src }) => {
  return <KeyServiceMockStyle src={src} />;
};

export default KeyServiceMock;
