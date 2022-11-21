import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/png/background.png';
import Title from '../components/Title/Title';
import AnimationLink from '../components/Partials/AnimationLink';
import donut from '../assets/png/donut.png';
import coin from '../assets/png/coin.png';
import phoneBackgroundImg from '../assets/png/background-phone.png';
import iconPhone from '../assets/png/phoneMock.png';
import iconFolder from '../assets/png/icon-folder.png';
import iconHelpCenter from '../assets/png/icon-message.png';
import iconWhitePaper from '../assets/png/icon-paper.png';
import iconX from '../assets/png/icon-X.png';
import iconY from '../assets/png/icon-Y.png';
import iconL from '../assets/png/icon-L.png';
import iconO from '../assets/png/icon-O.png';

const MainStyled = styled.div``;

const BackgroundSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15%;
  background-image: url('${backgroundImg}');
  height: calc(100vh - 114px);
  background-size: cover;
  div {
    width: 50%;
    color: #ffffff;
  }
`;

const DonutImg = styled.span`
  background-image: url('${donut}');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: absolute;
  left: 57%;
  top: 4%;
  width: 40%;
  height: 710px;
  animation: up-down 1.4s infinite ease-in-out alternate;

  @keyframes up-down {
    0% {
      margin-top: -5px;
    }
    100% {
      margin-top: 15px;
    }
  }
`;

const CoinImg = styled.span`
  background-image: url('${coin}');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: absolute;
  left: 60%;
  top: 8%;
  width: 12%;
  height: 243px;
  animation: up-down 1.2s infinite ease-in-out alternate;

  @keyframes up-down {
    0% {
      margin-top: -10px;
    }
    100% {
      margin-top: 5px;
    }
  }
`;

const PageSection = styled.div`
  height: calc(100vh + 7px);
`;

const ProductSectionStyle = styled.div`
  display: flex;
  height: inherit;
`;

const SliceLeft = styled.div`
  /* padding-left: 15%; */
  margin-top: -80px;
  padding-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  width: 39%;
  height: inherit;
`;

const SliceRight = styled.div`
  background-image: url('${phoneBackgroundImg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 55%;
  height: inherit;
  /* z-index: 1; */
`;

const PhoneImg = styled.div`
  position: absolute;
  background-image: url('${iconPhone}');
  /* background-size: cover; */
  background-repeat: no-repeat;
  width: 18%;
  height: 16%;
  left: 66%;
  top: 24%;
  /* z-index: 100; */
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const InfoSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  height: inherit;
  background-color: #fafafa;
`;

const InfoContent = styled.div`
  display: flex;
  text-align: center;
  padding: 0 15%;
  font-size: 20px;
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
`;

const DocsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  div {
    width: 440px;
  }
`;

const HelpContainer = styled(DocsContainer)``;

const PaperContainer = styled(DocsContainer)``;

const RoadmapSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  background-color: #222222;
  div {
    color: #ffffff;
  }
`;

const RoadmapContent = styled.div``;

const XyloAnimation = styled.div<IXyloAnimation>`
  ${({ src }) => {
    if (src.includes(`icon-X`)) {
      return `
        background-image: url(${src});
        width: 33% !important;
        left: 0;
        top: 330vh;
      `;
    }
    if (src.includes(`icon-Y`)) {
      return `
        background-image: url(${src});
        left: 19%;
        top: 333vh;
      `;
    }
    if (src.includes(`icon-L`)) {
      return `
        background-image: url(${src});
        left: 50%;
        top: 332vh;
      `;
    }
    if (src.includes(`icon-O`)) {
      return `
        background-image: url(${src});
        left: 73%;
        top: 328vh;
      `;
    }
    return ``;
  }}
  width: 27%;
  height: 20%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${({ level }) => {
    return `
      animation: up-down 1.${level}s infinite ease-in-out alternate;
    `;
  }}

  @keyframes up-down {
    0% {
      margin-top: 5px;
    }
    100% {
      margin-top: -15px;
    }
  }
`;

interface IXyloAnimation {
  src: string;
  level: number;
}

const Main = () => {
  return (
    <MainStyled>
      <BackgroundSection>
        <Title size="primary">
          Outgrowing Blockchain, <br /> Rocketing rewards
        </Title>
        <DonutImg />
        <CoinImg />
      </BackgroundSection>
      <PageSection>
        <ProductSectionStyle>
          <SliceLeft>
            <Title size="primary">PRODUCT</Title>
            <ProductContent>
              <Title size="tertiary">XYLO Application</Title>
              An official wallet that can store XYLO ecosystem tokens
              <br />
              and blockchain platform that anyone can participate in
              <br /> governance through Community pool investment.
            </ProductContent>
            <AnimationLink link="/helpcenter/faq" name="DOWNLOAD" />
          </SliceLeft>
          <SliceRight>
            <PhoneImg />
          </SliceRight>
        </ProductSectionStyle>
      </PageSection>
      <PageSection>
        <InfoSectionStyle>
          <Title size="primary">INFO</Title>
          <InfoContent>
            <DocsContainer>
              <Title size="tertiary">XYLO Docs</Title>
              <Image src={iconFolder} alt="folder" />
              <div>
                An official document that provides concepts
                <br />
                and guides related to XYLO
              </div>
              <AnimationLink link="/" name="XYLO DOCS" />
            </DocsContainer>
            <HelpContainer>
              <Title size="tertiary">Help Center</Title>
              <Image src={iconHelpCenter} alt="HelpCenter" />
              <div>
                You can check the news and FAQs(Frequently
                <br />
                asked questions) about XYLO
              </div>
              <AnimationLink link="/helpcenter/faq" name="Help Center" />
            </HelpContainer>
            <PaperContainer>
              <Title size="tertiary">White Paper</Title>
              <Image src={iconWhitePaper} alt="WhitePaper" />
              <div>
                An official white paper where you can check
                <br />
                detailed information about XYLO
              </div>
              <AnimationLink link="/" name="White Paper" />
            </PaperContainer>
          </InfoContent>
        </InfoSectionStyle>
      </PageSection>
      <PageSection>
        <RoadmapSectionStyle>
          <Title size="primary">ROADMAP</Title>
          <RoadmapContent>
            <Title size="tertiary">1Q. 2023</Title>
          </RoadmapContent>
        </RoadmapSectionStyle>
        <XyloAnimation src={iconX} level={1} />
        <XyloAnimation src={iconY} level={2} />
        <XyloAnimation src={iconL} level={1} />
        <XyloAnimation src={iconO} level={2} />
      </PageSection>
    </MainStyled>
  );
};

export default Main;
