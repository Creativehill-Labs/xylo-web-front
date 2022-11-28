import React, { FC } from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import backgroundImg from '../../assets/png/roadmapCardBackground.png';

const RoadmapCardStyle = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  gap: 20px;
`;

const RoadmapContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: url('${backgroundImg}');
  border-top: 1px solid #636363;
  width: 100%;
  height: 600px;
  z-index: 1;
  padding: 30px 20px;

  @media screen and (max-width: 768px) {
    height: auto;
    background-image: none;
  }
`;

const MonthlyTitle = styled.li`
  color: #aae112;
  margin-bottom: 20px;

  span {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 20px;
    position: relative;
    left: -12px;
    color: #ffffff;
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

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Content = styled.li`
  color: #fafafa;
  opacity: 0.8;
  font-size: 16px;
  margin-left: 10px;
  line-height: 20px;
  span {
    position: relative;
    left: -12px;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 14px;
      opacity: 0.5;
      margin-left: 5px;
    }
  }
`;

const MonthlyContainer = styled.div`
  div {
    margin-bottom: 10px;
  }
`;

const FirstQuarterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  span {
    text-align: center;
  }

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
  const SecondMayContent = `Acquire SOP through community
      pool investment. First round
      implementation of basic reward
      system that can be delegated to
      SOs, the governance validators,
      to obtain basic reward.`;
  return (
    <RoadmapCardStyle>
      <FirstQuarterContainer>
        <span>
          <Title size="tertiary">1Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>February</span>
              </MonthlyTitle>
              <SubTitle>XYLO Groundchain Testnet Launch</SubTitle>
              <Content>
                <span>Closed Beta Test</span>
              </Content>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </FirstQuarterContainer>
      <SecondQuarterContainer>
        <span>
          <Title size="tertiary">2Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>April</span>
              </MonthlyTitle>
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
              <MonthlyTitle>
                <span>May</span>
              </MonthlyTitle>
              <SubTitle>App Open Beta Service v0.9.7 Release</SubTitle>
              <Content>
                <span>{SecondMayContent}</span>
              </Content>
            </MonthlyContainer>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>June</span>
              </MonthlyTitle>
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
      <ThirdQuarterContainer>
        <span>
          <Title size="tertiary">3Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>August</span>
              </MonthlyTitle>
              <SubTitle>IOS App Launch</SubTitle>
              <SubTitle>XYLO Forum Launch</SubTitle>
            </MonthlyContainer>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>September</span>
              </MonthlyTitle>
              <SubTitle>Bridge duplex service Launch</SubTitle>
              <SubTitle>Explorer V1.0 Release</SubTitle>
              <br />
              <SubTitle>Governance Voting service Launch</SubTitle>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </ThirdQuarterContainer>
      <FourthQuarterContainer>
        <span>
          <Title size="tertiary">4Q, 2023</Title>
        </span>
        <ContentStyle>
          <RoadmapContentCard>
            <MonthlyContainer>
              <MonthlyTitle>
                <span>August</span>
              </MonthlyTitle>
              <SubTitle>Dex Service Launch</SubTitle>
              <SubTitle>XYLO investment managing system</SubTitle>
              <SubTitle>APP service V 1.0 Release</SubTitle>
            </MonthlyContainer>
          </RoadmapContentCard>
        </ContentStyle>
      </FourthQuarterContainer>
    </RoadmapCardStyle>
  );
};

export default RoadmapCard;
