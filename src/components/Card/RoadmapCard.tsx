import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import Title from '../Title/Title';
import 'aos/dist/aos.css';
import backgroundImg from '../../assets/png/roadmapCardBackground.png';

const RoadmapCardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  position: relative;
  z-index: 1;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 520px) {
    display: block;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  gap: 20px;
`;
const MonthlyContainer = styled.div``;
const RoadmapContentCard = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 40px;
  background-image: url('${backgroundImg}');
  border-top: 1px solid #636363;
  width: 100%;
  min-height: 784px;
  z-index: 1;
  padding: 40px 16px;
  ${MonthlyContainer} + ${MonthlyContainer} {
    margin-top: 32px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: auto;
    background-image: none;
  }
`;

const MonthlyTitle = styled.div`
  color: #fff;
  margin-bottom: 24px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
  position: relative;
  padding-left: 16px;
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #aae112;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 10px;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 16px;
      margin-left: 5px;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  color: #fafafa;
  opacity: 0.8;
  font-size: 16px;
  line-height: 20px;
  span {
    position: relative;
    opacity: 0.5;
    padding: 0 0 0 12px;
    display: inline-block;
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: #fafafa;
      opacity: 0.5;
      border-radius: 100%;
      position: absolute;
      left: 0;
      top: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
`;

const FirstQuarterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 768px) {
    span > div {
      font-size: 20px;
      text-align: left;
    }
  }
`;
const SecondQuarterContainer = styled(FirstQuarterContainer)``;
const ThirdQuarterContainer = styled(FirstQuarterContainer)``;
const FourthQuarterContainer = styled(FirstQuarterContainer)``;

const RoadmapCard: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: `ease`,
    });
  }, []);
  const SecondMayContent = `Acquire SOP through community
      pool investment. First round
      implementation of basic reward
      system that can be delegated to
      SOs, the governance validators,
      to obtain basic reward.`;
  return (
    <RoadmapCardStyle>
      <FirstQuarterContainer data-aos="flip-right">
        <span>
          <Title size="tertiary">1Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>February</MonthlyTitle>
              <SubTitle>XYLO Groundchain Testnet Launch</SubTitle>
              <Content>
                <span>Closed Beta Test</span>
              </Content>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </FirstQuarterContainer>
      <SecondQuarterContainer data-aos="flip-right" data-aos-delay="100">
        <span>
          <Title size="tertiary">2Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>April</MonthlyTitle>
              <SubTitle>XYLO Groundchain Testnet Launch</SubTitle>
              <Content>
                <span>Open Beta Service</span>
              </Content>
              <Content>
                <span>Bridge Open Beta Service</span>
              </Content>
              <Content>
                <span>Explorer Open Beta Service</span>
              </Content>
            </MonthlyContainer>
            <MonthlyContainer>
              <MonthlyTitle>May</MonthlyTitle>
              <SubTitle>App Open Beta Service v0.9.7 Release</SubTitle>
              <Content>
                <span>{SecondMayContent}</span>
              </Content>
            </MonthlyContainer>
            <MonthlyContainer>
              <MonthlyTitle>June</MonthlyTitle>
              <SubTitle>
                Whitepaper V0.9.7 Release
                <br /> Changed reward policy
                <br /> Reduced Node operation
                <br /> consignment fee
              </SubTitle>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </SecondQuarterContainer>
      <ThirdQuarterContainer data-aos="flip-right" data-aos-delay="200">
        <span>
          <Title size="tertiary">3Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>August</MonthlyTitle>
              <SubTitle>IOS App Launch</SubTitle>
              <SubTitle>XYLO Forum Launch</SubTitle>
            </MonthlyContainer>
            <MonthlyContainer>
              <MonthlyTitle>September</MonthlyTitle>
              <SubTitle>Bridge duplex service Launch</SubTitle>
              <SubTitle>Explorer V1.0 Release</SubTitle>
              <br />
              <SubTitle>Governance Voting service Launch</SubTitle>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </ThirdQuarterContainer>
      <FourthQuarterContainer data-aos="flip-right" data-aos-delay="300">
        <span>
          <Title size="tertiary">4Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>August</MonthlyTitle>
              <SubTitle>Dex Service Launch</SubTitle>
              <SubTitle>
                XYLO investment managing system APP service V 1.0 Release
              </SubTitle>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </FourthQuarterContainer>
    </RoadmapCardStyle>
  );
};

export default RoadmapCard;
