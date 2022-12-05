import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { setNavIsOpen } from '../../features/commonSlice';
import iconLogo from '../../assets/png/icon-logo@2x-8.png';
import HamburgerMenu from '../Partials/HamburgerMenu';
import { selectCommonSlice } from '../../store';

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

  a {
    z-index: 999;
  }
  & > div {
    z-index: 998;
  }

  @media screen and (max-width: 1400px) {
    width: 80%;
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
  a:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 1400px) {
    width: 58%;
  }
`;

const Navigation = () => {
  const dispatch = useDispatch();
  const { navIsOpen } = useSelector(selectCommonSlice);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  return (
    <NavStyle>
      <Navheader>
        <Link to="/">
          <Logo src={iconLogo} />
        </Link>
        {isMobile ? (
          <HamburgerMenu
            onClick={() => dispatch(setNavIsOpen(!navIsOpen))}
            isOpen={navIsOpen}
          />
        ) : (
          <LinkContainer>
            <Link to="/">Main</Link>
            <a
              href="https://xylo.gitbook.io/xylo/"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
            <Link to="/helpcenter/faq">Help Center</Link>
            <Link to="/">White Paper</Link>
          </LinkContainer>
        )}
      </Navheader>
    </NavStyle>
  );
};

export default Navigation;
