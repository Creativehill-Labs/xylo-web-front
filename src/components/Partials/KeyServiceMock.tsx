import React, { FC } from 'react';
import styled from 'styled-components';

const KeyServiceMockStyle = styled.img<IKeyServiceMock>``;

interface IKeyServiceMock {
  src: string;
}

const KeyServiceMock: FC<IKeyServiceMock> = ({ src }) => {
  return <KeyServiceMockStyle src={src} />;
};

export default KeyServiceMock;
