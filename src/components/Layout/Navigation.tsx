import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconLogo from '../../assets/png/icon-logo@2x-8.png';

const NavStyle = styled.div`
  background-color: #000000;
`;

const Navheader = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  position: relative;
  height: 120px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 115px;
  height: 36px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
`;

const Navigation = () => {
  return (
    <NavStyle>
      <Navheader>
        <Link to="/">
          <Logo src={iconLogo} />
        </Link>
        <LinkContainer>
          <Link to="/">Main</Link>
          <Link to="/">Docs</Link>
          <Link to="/helpcenter/faq">Help Center</Link>
          <Link to="/">White Paper</Link>
        </LinkContainer>
      </Navheader>
    </NavStyle>
  );
};

export default Navigation;
