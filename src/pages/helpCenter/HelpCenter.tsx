import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import CategoryCard from './CategoryCard';
import { faqCardData } from '../../dummy/faqCardData';
import Title from '../../components/Title/Title';
import InnerSection from '../../components/Layout/InnerSection';
import HelpCenterTitleBox from '../../components/Partials/HelpCenterTitleBox';

const HelpCenterStyle = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;

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

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 40px 0;
    gap: 10px;
  }
`;

const TitleContainer = styled(HelpCenterTitleBox)``;

const HelpCenterCardContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 1400px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 20px;
  }
`;

const HelpCenter = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  return (
    <>
      <HelpCenterLayout />
      <InnerSection>
        <HelpCenterStyle>
          <TitleContainer>
            <Title size={isMobile ? `senary` : `secondary`}>
              We&apos;re standing by to help!
            </Title>
          </TitleContainer>
          <HelpCenterCardContainer>
            {faqCardData.map((el) => {
              return (
                <CategoryCard
                  title={el.title}
                  link={el.link}
                  src={el.src}
                  activeSrc={el.activeSrc}
                />
              );
            })}
          </HelpCenterCardContainer>
        </HelpCenterStyle>
      </InnerSection>
    </>
  );
};

export default HelpCenter;
