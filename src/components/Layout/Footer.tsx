import React from 'react';
import styled from 'styled-components';

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

const FooterButton = styled.input`
  width: 168px;
  height: 43px;
  padding: 12px 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
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
        <FooterButton
          type="button"
          value="Submit a request"
          onClick={() => console.log(`hi`)}
        />
      </QuestionContainer>
    </BottomFooter>
  );
};

export default Footer;
