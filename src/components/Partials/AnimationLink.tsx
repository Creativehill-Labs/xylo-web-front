import React, { FC } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/png/arrow-right.png';

const MainContainer = styled.div`
  font-size: 16px;
  font-weight: 700;

  //! DOWNLOAD Arrow Animation Style
  ul {
    padding: 0;
    list-style: none;
  }
  .the-arrow {
    transition: all 0.7s;
  }
  .the-arrow.-left {
    width: 0;
    margin-left: -50px;
    position: absolute;
    background-position: center;
  }
  .the-arrow.-left:before,
  .the-arrow.-left:after {
    width: 0;
  }
  .the-arrow.-right {
    background-position: center;
  }
  .the-arrow.-right {
    width: 44px;
    transition-delay: 0.2s;
  }
  .the-arrow {
    background-image: url('${arrow}');
    background-repeat: no-repeat;
    height: 20px;
    position: relative;
    transition: all 0.7s;
    transition-delay: 0;
    will-change: transform;
  }

  .animated-arrow {
    display: inline-block;
    color: #202020; // 글씨색
    font-size: 16px;
    transition: all 0.7s;
  }
  .animated-arrow:hover {
    color: #202020; // animate될때 글씨색
  }
  .animated-arrow:hover > .the-arrow.-left {
    width: 80px;
    height: 20px;
    transition-delay: 0.1s;
  }
  .animated-arrow:hover > .the-arrow.-left:before,
  .animated-arrow:hover > .the-arrow.-left:after {
    width: 8px;
    height: 20px;
    transition-delay: 0.1s;
  }
  .animated-arrow:hover > .main {
    transform: translateX(40px);
  }
  .animated-arrow:hover > .main > .the-arrow.-right {
    width: 0;
    transform: translateX(200%);
    transition-delay: 0;
  }
  .animated-arrow > .main {
    display: flex;
    align-items: center;
    transition: all 0.7s;
  }
  .animated-arrow > .main > .text {
    margin: 0 16px 0 0;
    line-height: 1;
  }
  .animated-arrow > .main > .the-arrow {
    position: relative;
  }
`;

interface IAnimationLink {
  link: string;
  name: string;
}

const AnimationLink: FC<IAnimationLink> = ({ link, name }) => {
  return (
    <MainContainer>
      <ul>
        <li>
          <a className="animated-arrow" href={link}>
            <div className="the-arrow -left" />
            <span className="main">
              <span className="text">{name}</span>
              <div className="the-arrow -right" />
            </span>
          </a>
        </li>
      </ul>
    </MainContainer>
  );
};

export default AnimationLink;
