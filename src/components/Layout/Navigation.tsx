import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconLogo from '../../assets/png/icon-logo@2x-8.png';

const Navheader = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  position: relative;
  background-color: #000000;
  width: 100%;
  height: 120px;
`;

const Logo = styled.img`
  width: 115px;
  height: 36px;
  margin-left: 15%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-right: 15%;
`;

const Navigation = () => {
  return (
    <Navheader>
      <Logo src={iconLogo} />
      <LinkContainer>
        <Link to="/">Main</Link>
        <Link to="/">Docs</Link>
        <Link to="/helpcenter/faq">Help Center</Link>
        <Link to="/">White Paper</Link>
      </LinkContainer>
    </Navheader>
  );
};

export default Navigation;
