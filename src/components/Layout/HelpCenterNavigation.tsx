/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.div`
  background-color: #000000;
`;

const NavContent = styled.div<INavbutton>`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: inherit;
  height: 79px;
  a {
    display: flex;
    height: calc(100% - 5px);
    width: 100%;
  }
  button {
    color: #6f6f6f;
  }
  ${({ currentClick }) => {
    return `
      a:nth-child(${currentClick}) {
        background-color: #313131;
        border-bottom: 5px solid #aae112;
        
        button {
         color: #aae112;
        }
      }
    `;
  }}

  @media screen and (max-width: 768px) {
    height: 48px;
    white-space: pre-line;
    button {
      color: #ffffff;
      font-weight: 700;
      height: 100%;
    }
  }
`;

const NavButton = styled.button`
  color: #aae112;
  height: inherit;
  width: 100%;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const NavText = styled.span`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

interface INavbutton {
  currentClick: string;
}

const HelpCenterNavigation = () => {
  const { pathname } = useLocation();
  const [currentClick, setCurrentClick] = useState<string>(
    pathname.includes(`/faq`)
      ? `1`
      : pathname.includes(`/notice`)
      ? `2`
      : pathname.includes(`/policy`)
      ? `3`
      : ``,
  );
  return (
    <NavStyle>
      <NavContent currentClick={currentClick}>
        <Link to="/helpcenter/faq">
          <NavButton onClick={() => setCurrentClick(`1`)}>
            <NavText>FAQ</NavText>
          </NavButton>
        </Link>
        <Link to="/helpcenter/notice">
          <NavButton onClick={() => setCurrentClick(`2`)}>
            <NavText>Notice</NavText>
          </NavButton>
        </Link>
        <Link to="/helpcenter/policy">
          <NavButton onClick={() => setCurrentClick(`3`)}>
            <NavText>Operation Policy</NavText>
          </NavButton>
        </Link>
      </NavContent>
    </NavStyle>
  );
};

export default HelpCenterNavigation;
