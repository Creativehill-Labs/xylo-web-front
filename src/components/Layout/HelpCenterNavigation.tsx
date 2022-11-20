/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.div<INavbutton>`
  padding: 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: 79px;
  background-color: #000000;
  a {
    height: calc(100% - 5px);
    width: 100%;
  }
  ${({ currentClick }) => {
    console.log(currentClick);
    return `
           a:nth-child(${currentClick}) {
            background-color: #313131;
            border-bottom: 5px solid #aae112;
           }
          `;
  }}
`;

const NavButton = styled.button`
  color: #aae112;
  height: inherit;
  width: 100%;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

interface INavbutton {
  currentClick: string;
}

const HelpCenterNavigation = () => {
  const { pathname } = useLocation();
  const [currentClick, setCurrentClick] = useState<string>(
    pathname.includes(`/notice`)
      ? `2`
      : pathname.includes(`/policy`)
      ? `3`
      : `1`,
  );
  return (
    <NavStyle currentClick={currentClick}>
      <Link to="/helpcenter/faq">
        <NavButton onClick={() => setCurrentClick(`1`)}>FAQ</NavButton>
      </Link>
      <Link to="/helpcenter/notice">
        <NavButton onClick={() => setCurrentClick(`2`)}>Notice</NavButton>
      </Link>
      <Link to="/helpcenter/policy">
        <NavButton onClick={() => setCurrentClick(`3`)}>
          Operation Policy
        </NavButton>
      </Link>
    </NavStyle>
  );
};

export default HelpCenterNavigation;
