import React from 'react';
import { Link } from 'react-router-dom';
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
        color: #A0A0A0
      `;
    }
    if (color === `white`) {
      return `
            color: #FFFFFF;
        `;
    }
    return ``;
  }}
`;

interface IContent {
  color: 'grey' | 'white';
}

const Footer = () => {
  const reservedContent = `© 2022 XYLO. All Rights
   Reserved.`;
  const questionContent = `  Have more 
  questions?`;
  return (
    <BottomFooter>
      <FooterContent color="grey">{reservedContent}</FooterContent>
      <QuestionContainer>
        <FooterContent color="white">{questionContent}</FooterContent>
        <Link to="/helpcenter/submit">
          <SubmitRequestButton />
        </Link>
      </QuestionContainer>
    </BottomFooter>
  );
};

export default Footer;
