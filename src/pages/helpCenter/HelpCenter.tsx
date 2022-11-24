import React from 'react';
import styled from 'styled-components';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import CategoryCard from './CategoryCard';
import { faqCardData } from '../../dummy/faqCardData';
import Title from '../../components/Title/Title';

const HelpCenterStyle = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh + 9px);

  @media screen and (max-width: 1400px) and (min-width: 768px) {
    height: 100%;
    & > div {
      margin-top: 50px;
    }
    margin-bottom: 50px;
    & > div:nth-child(2) {
      justify-content: space-evenly;
    }
  }
`;

const TitleContainer = styled.div``;

const HelpCenterCardContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
`;

const HelpCenter = () => {
  return (
    <>
      <HelpCenterLayout />
      <HelpCenterStyle>
        <TitleContainer>
          <Title size="secondary">We&apos;re standing by to help!</Title>
        </TitleContainer>
        <HelpCenterCardContainer>
          {faqCardData.map((el) => {
            return (
              <CategoryCard
                title={el.title}
                link="/"
                src={el.src}
                activeSrc={el.activeSrc}
              />
            );
          })}
        </HelpCenterCardContainer>
      </HelpCenterStyle>
    </>
  );
};

export default HelpCenter;
