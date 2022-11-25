import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconMenuBar from '../../assets/png/icon-menuBar.png';

const MenuBarContainer = styled.div`
  background-image: url('${iconMenuBar}');
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const MenuBarListContainer = styled.ul<IHamburgerMenu>`
  display: ${({ isOpen }) => {
    if (isOpen) {
      return `flex`;
    }
    return `none`;
  }};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px 29px;
  background-color: #282828;
  position: absolute;
  list-style: none;
  width: 100%;
  height: 40vh;
  left: 0;
  margin-left: -30px;
  top: 69px;
  z-index: 1;
`;

const MenuBarList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  a {
    font-family: 'Montserrat';
    font-weight: 700;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 300%;
  }
`;

interface IHamburgerMenu {
  onClick?: () => void;
  isOpen: boolean;
}

const HamburgerMenu: FC<IHamburgerMenu> = ({ onClick, isOpen }) => {
  return (
    <MenuBarContainer onClick={onClick}>
      <MenuBarListContainer isOpen={isOpen}>
        <MenuBarList>
          <Link to="/">Main</Link>
        </MenuBarList>
        <MenuBarList>
          <Link to="/">Docs</Link>
        </MenuBarList>
        <MenuBarList>
          <Link to="/helpcenter/faq">Help Center</Link>
        </MenuBarList>
        <MenuBarList>
          <Link to="/">White Paper</Link>
        </MenuBarList>
      </MenuBarListContainer>
    </MenuBarContainer>
  );
};

export default HamburgerMenu;
