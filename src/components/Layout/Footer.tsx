import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import SubmitRequestButton from '../Partials/SubmitRequestButton';

const BottomFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 206px;
  background-color: #151515;

  @media screen and (max-width: 768px) {
    height: 139px;
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  margin-right: 15%;
  justify-content: space-between;
`;

const FooterContent = styled.div<IContent>`
  white-space: pre-wrap;
  margin-left: 15%;
  width: 300px;
  ${({ color }) => {
    if (color === `grey`) {
      return `
        color: #A0A0A0;
      `;
    }
    if (color === `white`) {
      return `
            color: #FFFFFF;
        `;
    }
    return ``;
  }}

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    white-space: normal;
    width: 100%;
    font-size: 14px;
  }
`;

interface IContent {
  color: 'grey' | 'white';
}

const Footer = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const reservedContent = `© 2022 XYLO. All Rights
   Reserved.`;
  const questionContent = `  Have more 
  questions?`;
  return (
    <BottomFooter>
      {isMobile ? (
        <FooterContent color="grey">{reservedContent}</FooterContent>
      ) : (
        <>
          <FooterContent color="grey">{reservedContent}</FooterContent>
          <QuestionContainer>
            <FooterContent color="white">{questionContent}</FooterContent>
            <Link to="/helpcenter/submit">
              <SubmitRequestButton />
            </Link>
          </QuestionContainer>
        </>
      )}
    </BottomFooter>
  );
};

export default Footer;
