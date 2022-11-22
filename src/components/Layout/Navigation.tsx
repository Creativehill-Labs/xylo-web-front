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

const LogoContainer = styled.div`
  margin-left: 15%;
`;

const Logo = styled.img`
  width: 115px;
  height: 36px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 56px;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  margin-right: 15%;
`;

const Navigation = () => {
  return (
    <Navheader>
      <LogoContainer>
        <Link to="/">
          <Logo src={iconLogo} />
        </Link>
      </LogoContainer>
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
