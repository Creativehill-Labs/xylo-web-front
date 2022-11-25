import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import backgroundImg from '../assets/png/background.png';
import Title from '../components/Title/Title';
import AnimationLink from '../components/Partials/AnimationLink';
import iconArrowDown from '../assets/png/arrow-down.png';
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
import RoadmapCard from '../components/Card/RoadmapCard';
import { selectCommonSlice } from '../store';
import { setNavIsOpen } from '../features/commonSlice';

const MainStyled = styled.div<MainStyleProps>`
  ${({ backDark }) => {
    if (backDark) {
      return `
        filter: brightness(40%)
      `;
    }
    return ``;
  }}
`;

const BackgroundSection = styled.div`
  display: flex;
  align-items: center;
  background-image: url('${backgroundImg}');
  background-color: rgba(0, 0, 0, 0.8);
  height: calc(100vh - 114px);
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 69px);
    background-position: 65%;
  }
`;

const BackgroundContent = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  height: 100%;
  div {
    color: #ffffff;
  }

  /* @media screen and (min-width: 1400px) {
    div {
      width: 50%;
    }
  } */

  @media screen and (max-width: 1400px) and (min-width: 769px) {
    width: 768px;
    div {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    align-items: flex-start;
    justify-content: center;
    & > div {
      padding: 150px 30px 0 30px;
      font-size: 24px;
      line-height: 29px;
      width: none;
    }
  }
`;

const ScrollDownAttach = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 17.5%;
  transform: translate(-50%);
  div {
    color: #aae112;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    top: 13.5%;
  }
`;

const ScrollDown = styled.div`
  width: inherit;
  height: 30px;
  background-image: url('${iconArrowDown}');
  background-repeat: no-repeat;
  background-position: center;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 50%;
    top: 20vh;
    transform: translate(-50%);
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

  @media screen and (max-width: 768px) {
    width: 30%;
    left: 30%;
    top: 38vh;
    transform: translate(-50%);
  }
`;

const ProductSectionStyle = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  background-image: url('${phoneBackgroundImg}');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50% 100%;
  height: calc(100vh + 7px);
`;

const ProductSectionContent = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  flex: 1 1 0;
`;

const SliceLeft = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 70px;
  height: inherit;
  width: 100%;
`;

const SliceRight = styled.div`
  width: 100%;
`;

const PhoneImg = styled.div`
  position: absolute;
  background-image: url('${iconPhone}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 17%;
  height: 11.5%;
  left: 67%;
  top: 20.7%;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: -25px;
`;

const MobileProductSectionStyle = styled.div``;

const MobileProductSectionContent = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const MobileProductTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  @media screen and (max-width: 768px) {
    span {
      font-size: 12px;
    }
  }
`;

const MobileTopTitleContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const MobileProductTopContent = styled.div`
  font-size: 14px;
  line-height: 17px;
  white-space: pre-line;
  div {
    margin-bottom: 10px;
  }
`;

const MobileProductBottom = styled.div`
  background-image: url('${phoneBackgroundImg}');
  background-size: 150% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const MobilePhoneImg = styled.div`
  position: relative;
  background-size: 100% 100%;
  width: 56%;
  height: 53%;
  left: 23%;
  top: 15%;
  background-image: url('${iconPhone}');
`;

const AppExampleSectionStyle = styled.div`
  height: calc(100vh + 7px);
  display: flex; //!
  justify-content: center; //!
  align-items: center; //!
  background-color: powderblue; //!
`;

const InfoSectionStyle = styled.div<ScrollType>`
  height: calc(100vh + 7px);
  transition: background 1.4s ease-in-out;

  ${({ scrollPosition }) => {
    if (scrollPosition > 1400 && scrollPosition < 2400) {
      return `
      background-color: #FAFAFA;
      `;
    }
    if (scrollPosition < 1400) {
      return `
      background-color: #FFFFFF;
      `;
    }
    return ``;
  }}

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 70px;
  }
`;

const InfoSectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  height: 100%;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    gap: 80px;
  }
`;

const InfoTitleContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Image = styled.img`
  width: 230px;
  height: 230px;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 75%;
  }
`;

const DocsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* div {
    width: 440px;
    text-align: center;
  } */
  @media screen and (max-width: 768px) {
    span {
      font-size: 12px;
    }
  }
`;

const HelpContainer = styled(DocsContainer)``;

const PaperContainer = styled(DocsContainer)``;

const InfoContentText = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const DocsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HelpContent = styled(DocsContent)``;
const PaperContent = styled(DocsContent)``;

const AnimationLinkContainer = styled.span`
  margin-left: 35%;
`;

const RoadmapSectionStyle = styled.div<ScrollType>`
  height: calc(100vh + 7px);
  transition: background 1s ease-in-out;

  ${({ scrollPosition }) => {
    if (scrollPosition > 2400) {
      return `
      background-color: #222222;
      `;
    }
    return `
      background-color: #fafafa;
    `;
  }}

  div {
    color: #ffffff;
  }
`;

const RoadmapSectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

const RoadmapContent = styled.div`
  display: flex;
  gap: 20px;
`;

const XyloAnimation = styled.div<IXyloAnimation>`
  ${({ src }) => {
    if (src.includes(`icon-X`)) {
      return `
      background-image: url(${src});
      width: 40%;
      height: 20%;
      left: 0;
      top: 413vh;
      
      @media screen and (max-width: 768px) {
          background-size: 100% 100%;
          top: 499vh;
          width: 40%;
          height: 5%;
        }
      `;
    }
    if (src.includes(`icon-Y`)) {
      return `
        background-image: url(${src});
        left: 8%;
        top: 426vh;
        width: 50%;
        height: 18%;

        @media screen and (max-width: 768px) {
          top: 533vh; 
          width: 100%;
          height: 8%;
        }
      `;
    }
    if (src.includes(`icon-L`)) {
      return `
        background-image: url(${src});
        left: 38%;
        top: 416vh;
        width: 50%;
        height: 20%;

        @media screen and (max-width: 768px) {
          top: 532vh;
          width: 100%;
          height: 10%;
        }
      `;
    }
    if (src.includes(`icon-O`)) {
      return `
        background-image: url(${src});
        right: 0;
        width: 33%;
        height: 20%;
        top: 416vh;

        @media screen and (max-width: 768px) {
          top: 528vh;
          width: 100%;
          height: 5%;
        }
      `;
    }
    return ``;
  }}
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  ${({ level }) => {
    return `
      animation: up-down 2.${level}s infinite ease-in-out alternate;
    `;
  }}

  @keyframes up-down {
    0% {
      margin-top: 5px;
    }
    100% {
      margin-top: -10px;
    }
  }
`;

interface IXyloAnimation {
  src: string;
  level: number;
}

interface ScrollType {
  scrollPosition: number;
}

interface MainStyleProps {
  backDark: boolean;
}

const Main = () => {
  const dispatch = useDispatch();
  const { navIsOpen } = useSelector(selectCommonSlice);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener(`scroll`, updateScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener(`scroll`, updateScroll);
    };
  }, []);
  const mobileProductText = `An official wallet that can store XYLO
  ecosystem tokens and blockchain platform
  that anyone can participate in governance
  through Community pool investment.`;

  return (
    <MainStyled
      backDark={navIsOpen}
      onClick={() => (navIsOpen ? dispatch(setNavIsOpen(!navIsOpen)) : null)}
    >
      <BackgroundSection>
        <BackgroundContent>
          <Title size="primary">
            Outgrowing Blockchain, <br /> Rocketing rewards
          </Title>
          <DonutImg />
          <CoinImg />
          <ScrollDownAttach>
            <Title size="quinary">Scroll Down</Title>
            <ScrollDown />
          </ScrollDownAttach>
        </BackgroundContent>
      </BackgroundSection>
      {isMobile ? (
        <MobileProductSectionStyle>
          <MobileProductSectionContent>
            <MobileProductTop>
              <MobileTopTitleContainer>
                <Title size="quaternary">PRODUCT</Title>
              </MobileTopTitleContainer>
              <MobileProductTopContent>
                <Title size="senary">XYLO Application</Title>
                An official wallet that can store XYLO
                <br />
                ecosystem tokens and blockchain platform
                <br />
                that anyone can participate in governance
                <br />
                through Community pool investment.
              </MobileProductTopContent>
              <AnimationLink link="/helpcenter/faq" name="DOWNLOAD" />
            </MobileProductTop>
          </MobileProductSectionContent>
          <MobileProductBottom>
            <MobilePhoneImg />
          </MobileProductBottom>
        </MobileProductSectionStyle>
      ) : (
        <ProductSectionStyle>
          <ProductSectionContent>
            <PhoneImg />
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
            <SliceRight />
          </ProductSectionContent>
        </ProductSectionStyle>
      )}
      <AppExampleSectionStyle>
        <Title size="primary">App Example</Title>
      </AppExampleSectionStyle>
      <InfoSectionStyle scrollPosition={scrollPosition}>
        <InfoSectionContent>
          <InfoTitleContainer>
            <Title size={isMobile ? `quaternary` : `primary`}>INFO</Title>
          </InfoTitleContainer>
          <InfoContent>
            <DocsContainer>
              <DocsContent>
                <Title size={isMobile ? `senary` : `tertiary`}>XYLO Docs</Title>
                <Image src={iconFolder} alt="folder" />
                <InfoContentText>
                  An official document that provides concepts
                  <br />
                  and guides related to XYLO
                </InfoContentText>
              </DocsContent>
              <AnimationLinkContainer>
                <AnimationLink link="/" name="XYLO DOCS" />
              </AnimationLinkContainer>
            </DocsContainer>
            <HelpContainer>
              <HelpContent>
                <Title size={isMobile ? `senary` : `tertiary`}>
                  Help Center
                </Title>
                <Image src={iconHelpCenter} alt="HelpCenter" />
                <InfoContentText>
                  You can check the news and FAQs(Frequently
                  <br />
                  asked questions) about XYLO
                </InfoContentText>
              </HelpContent>
              <AnimationLinkContainer>
                <AnimationLink link="/helpcenter/faq" name="Help Center" />
              </AnimationLinkContainer>
            </HelpContainer>
            <PaperContainer>
              <PaperContent>
                <Title size={isMobile ? `senary` : `tertiary`}>
                  White Paper
                </Title>
                <Image src={iconWhitePaper} alt="WhitePaper" />
                <InfoContentText>
                  An official white paper where you can check
                  <br />
                  detailed information about XYLO
                </InfoContentText>
              </PaperContent>
              <AnimationLinkContainer>
                <AnimationLink link="/" name="White Paper" />
              </AnimationLinkContainer>
            </PaperContainer>
          </InfoContent>
        </InfoSectionContent>
      </InfoSectionStyle>
      <RoadmapSectionStyle scrollPosition={scrollPosition}>
        <RoadmapSectionContent>
          <Title size="primary">ROADMAP</Title>
          <RoadmapContent>
            <RoadmapCard />
          </RoadmapContent>
        </RoadmapSectionContent>
        <XyloAnimation src={iconX} level={3} />
        <XyloAnimation src={iconY} level={7} />
        <XyloAnimation src={iconL} level={2} />
        <XyloAnimation src={iconO} level={6} />
      </RoadmapSectionStyle>
    </MainStyled>
  );
};

export default Main;
