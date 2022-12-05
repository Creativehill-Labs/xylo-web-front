import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import iconMenuBar from '../../assets/png/icon-menuBar.png';
import { selectCommonSlice } from '../../store';
import { setNavIsOpen } from '../../features/commonSlice';

const MenuBarStyle = styled.div`
  background-image: url('${iconMenuBar}');
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const MenuBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
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
  left: 0%;
  margin-left: -29px;
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
  const dispatch = useDispatch();
  const { navIsOpen } = useSelector(selectCommonSlice);

  return (
    <>
      {isOpen ? (
        <MenuBarContainer
          onClick={() =>
            navIsOpen ? dispatch(setNavIsOpen(!navIsOpen)) : null
          }
        />
      ) : null}
      <MenuBarStyle onClick={onClick}>
        <MenuBarListContainer isOpen={isOpen}>
          <MenuBarList>
            <Link to="/">Main</Link>
          </MenuBarList>
          <MenuBarList>
            <a
              href="https://xylo.gitbook.io/xylo/"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </MenuBarList>
          <MenuBarList>
            <Link to="/helpcenter/faq">Help Center</Link>
          </MenuBarList>
          <MenuBarList>
            <Link to="/">White Paper</Link>
          </MenuBarList>
        </MenuBarListContainer>
      </MenuBarStyle>
    </>
  );
};

export default HamburgerMenu;
