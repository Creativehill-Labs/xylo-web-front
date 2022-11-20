import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../components/Layout/Footer';
import Navigation from '../components/Layout/Navigation';

const CommonLayoutContainer = styled.div`
  padding-bottom: 200px;
`;

interface ICommonLayout {
  children: ReactNode;
}

const CommonLayout: FC<ICommonLayout> = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <Navigation />
      {children}
      <Footer />
    </CommonLayoutContainer>
  );
};

export default CommonLayout;
