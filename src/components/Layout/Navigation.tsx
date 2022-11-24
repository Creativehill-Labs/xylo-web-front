import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import iconLogo from '../../assets/png/icon-logo@2x-8.png';
import iconMenuBar from '../../assets/png/icon-menuBar.png';

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

  @media screen and (max-width: 1400px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    height: 69px;
  }
`;

const Logo = styled.img`
  width: 115px;
  height: 36px;

  @media screen and (max-width: 768px) {
    width: 67px;
    height: 21px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
  @media screen and (max-width: 1400px) {
    width: 58%;
  }
`;

const MenuBarContainer = styled.div`
  background-image: url('${iconMenuBar}');
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const Navigation = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  console.log(isMobile);
  return (
    <NavStyle>
      <Navheader>
        <Link to="/">
          <Logo src={iconLogo} />
        </Link>
        {isMobile ? (
          <MenuBarContainer />
        ) : (
          <LinkContainer>
            <Link to="/">Main</Link>
            <Link to="/">Docs</Link>
            <Link to="/helpcenter/faq">Help Center</Link>
            <Link to="/">White Paper</Link>
          </LinkContainer>
        )}
      </Navheader>
    </NavStyle>
  );
};

export default Navigation;
