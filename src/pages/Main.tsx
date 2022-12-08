import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImg from '../assets/png/background.png';
import Title from '../components/Title/Title';
import AnimationLink from '../components/Partials/AnimationLink';
import RoadmapCard from '../components/Card/RoadmapCard';
import { selectCommonSlice } from '../store';
import iconArrowDown from '../assets/png/arrow-down.png';
import iconArrowRight from '../assets/png/arrow-right.png';
import iconArrowLeft from '../assets/png/arrow-left.png';
import donut from '../assets/png/donut.png';
import coin from '../assets/png/coin.png';
import phoneBackgroundImg from '../assets/png/background-phone.png';
import iconPhone from '../assets/png/phoneMock.png';
import serviceBackgroundImg from '../assets/png/serviceBackground.png';
import iconFolder from '../assets/png/icon-folder.png';
import iconHelpCenter from '../assets/png/icon-message.png';
import iconWhitePaper from '../assets/png/icon-paper.png';
import iconX from '../assets/png/icon-X.png';
import iconY from '../assets/png/icon-Y.png';
import iconL from '../assets/png/icon-L.png';
import iconO from '../assets/png/icon-O.png';
import KeyServiceMock from '../components/Partials/KeyServiceMock';
import { CommunityData, WalletData, XoData } from '../dummy/KeyServiceMockData';
import InnerSection from '../components/Layout/InnerSection';

const MainStyled = styled.div<MainStyleProps>``;

const BackgroundSection = styled.div`
  display: flex;
  align-items: center;
  background-image: url('${backgroundImg}');
  background-color: rgba(0, 0, 0, 0.8);
  height: calc(${window.innerHeight}px - 120px);
  background-size: cover;
  /* background-attachment: fixed; */
  position: relative;

  @media screen and (max-width: 768px) {
    background-position: 65%;
    height: calc(100vh - 69px);
  }
`;

const BackgroundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  div {
    color: #ffffff;
  }

  /* @media screen and (min-width: 1400px) {
    div {
      width: 50%;
    }
  } */

  @media screen and (max-width: 1400px) and (min-width: 769px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 4%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    & > div {
      margin-top: -50px;
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

const MainTitle = styled.div`
  position: relative;
  width: 100%;
  top: 10%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    left: 5%;
  }
`;
const MainTitleText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  color: #202020;
  font-weight: 700;
  white-space: pre-line;
  line-height: 1.4;

  @media screen and (max-width: 1440px) {
    width: 60%;
    font-size: 42px !important;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 24px !important;
  }
`;

const MainSubTitleText = styled.div`
  font-size: 24px;
  width: 50%;
  line-height: 29px;

  @media screen and (max-width: 1440px) {
    width: 50%;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    line-height: 17px;
  }
`;

const ScrollDownAttach = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 8%;
  div {
    color: #aae112;
    width: 130px;
  }
  @media screen and (max-width: 768px) {
    top: 2%;
    left: 0;
    width: 100%;
    text-align: center;
    div {
      width: 100%;
    }
  }
`;

const ScrollDown = styled.div`
  width: inherit;
  height: 30px;
  background: url('${iconArrowDown}') no-repeat center;
`;

const DonutImg = styled.span`
  background: url('${donut}') no-repeat center;
  background-size: 100%;
  position: absolute;
  left: 57%;
  top: 0;
  width: 40%;
  height: 100%;
  animation: floatingDonut 1.4s infinite ease-in-out alternate;
  @keyframes floatingDonut {
    0% {
      margin-top: 5px;
    }
    100% {
      margin-top: -10px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 310px;
    position: static;
    background-size: auto 100%;
    animation: floatingDonutMobile 1.4s infinite ease-in-out alternate;
    @keyframes floatingDonutMobile {
      0% {
        transform: translate(0, 10px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;

const CoinImg = styled.span`
  background: url('${coin}') no-repeat center;
  background-size: 100%;
  position: absolute;
  left: 60%;
  top: 25%;
  width: 12%;
  height: 243px;
  animation: floatingCoin 1.2s infinite ease-in-out alternate;
  @keyframes floatingCoin {
    0% {
      margin-top: -10px;
    }
    100% {
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30%;
    height: 100px;
    position: absolute;
    left: 20%;
    top: 50%;
    background-size: auto 100%;
    animation: floatingCoinMobile 0.9s infinite ease-in-out alternate;
    @keyframes floatingCoinMobile {
      0% {
        margin-top: -5px;
      }
      100% {
        margin-top: 5px;
      }
    }
  }
  @media screen and (max-width: 520px) {
    top: 40%;
    left: 15%;
  }
`;

const ProductSectionStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  position: relative;
`;

const ProductSectionContent = styled(InnerSection)`
  position: absolute;
  left: 50%;
  margin-left: -640px;
  padding-right: 640px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 150px;
  @media screen and (max-width: 1280px) {
    max-width: auto;
    left: 0;
    margin-left: 0;
    width: 100%;
    height: auto;
  }
`;

const SliceLeft = styled.div`
  display: grid;
  gap: 70px;
  width: 100%;
`;

const PhoneLayout = styled.div`
  width: 50%;
  position: relative;
  img {
    vertical-align: top;
  }
`;
const PhoneBackground = styled.div`
  width: 100%;
  height: 1083px;
  background-image: url(${phoneBackgroundImg});
  background-position: center top;
  @media screen and (max-width: 1280px) {
    height: 850px;
  }
`;
const PhoneImg = styled.img`
  position: absolute;
  left: 50%;
  margin-left: -148px;
  top: 120px;
  width: 297px;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: -25px;
  @media screen and (max-width: 1280px) {
    word-break: keep-all;
    br {
      display: none;
    }
  }
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
  gap: 60px;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  height: 600px;
  text-align: center;
`;

const MobilePhoneImg = styled.img`
  position: relative;
  width: 152px;
  display: inline-block;
  vertical-align: top;
  margin-top: 88px;
`;

const KeyServiceSectionStyle = styled.div`
  padding: 100px 0;
  overflow: hidden;
  background-image: url('${serviceBackgroundImg}');
  background-attachment: fixed;
`;

const KeyServiceSection = styled(InnerSection)`
  /* padding: 30px 0; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; //!
  align-items: center; //!

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
`;

const ServiceTitleContainer = styled.div`
  div {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    div {
      font-size: 24px;
    }
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
`;

const MobileXoImage = styled.img`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 320px) {
    height: 70%;
  }
`;
const MobileWalletImage = styled(MobileXoImage)``;
const MobileCommunityImage = styled(MobileXoImage)``;
const SliderItem = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    align-self: center;
    justify-self: center;
    width: 258px;
  }
`;
const MainPaging = styled.div`
  height: 90%;
  div {
    height: 100%;
  }
  div > div {
    width: 100%;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-track > div {
    height: 80%;
  }
`;

const SubPaging = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
  color: #3f3e3c;
  .slick-slider {
    width: 340px;
    margin: 0 auto;
    display: inline-block;
    position: relative;
  }
  .slick-slider.slick-initialized {
    width: 40%;
  }
  .slick-track {
    font-family: 'Montserrat';
    font-weight: 700;
    text-align: center;
  }
  .slick-arrow {
    top: 16px;
    &::before {
      display: none !important;
    }
    &.slick-prev {
      background: url('${iconArrowLeft}') no-repeat left;
      width: 50px;
      left: -70px;
    }
    &.slick-next {
      background: url('${iconArrowRight}') no-repeat right;
      width: 50px;
      right: -70px;
    }
  }

  .slick-active.slick-current + div {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    /* width: 100%; */
    font-size: 16px;
    .slick-slider.slick-initialized {
      width: 100%;
      margin: 0 auto;
    }
    .slick-list {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      margin: 0 auto;
      /* width: 100%; */
    }
    .slick-track {
    }
    .slick-arrow.slick-prev {
      width: 30px;
      left: -15%;
    }

    .slick-arrow.slick-next {
      width: 30px;
      right: -15%;
    }

    .slick-current {
    }
  }
`;

const ServiceText = styled.div`
  color: #ffffff;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    line-height: 17px;
  }
`;

const InfoSectionStyle = styled.div<ScrollType>`
  padding: 106px 0 250px 0;
  transition: background 1.4s ease-in-out;

  ${({ scrollPosition }) => {
    if (scrollPosition > 2100) {
      return `
      background-color: #FAFAFA;
      `;
    }
    if (scrollPosition < 2100) {
      return `
      background-color: #FFFFFF;
      `;
    }
    return ``;
  }}

  @media screen and (max-width: 768px) {
    padding: 0;
    ${({ scrollPosition }) => {
      if (scrollPosition > 2250) {
        return `
      background-color: #fafafa;
      `;
      }
      if (scrollPosition < 2250) {
        return `
      background-color: #FFFFFF;
      `;
      }
      return ``;
    }}
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

const InfoSectionContent = styled(InnerSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    gap: 80px;
    padding: 80px 0;
  }
`;

const InfoTitleContainer = styled.div``;

const Image = styled.img`
  width: 230px;
  height: 230px;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 75%;
  }
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
  transition: background 1s ease-in-out;
  padding: 150px 0 100px 0;
  overflow: hidden;
  position: relative;

  ${({ scrollPosition }) => {
    if (scrollPosition > 3000) {
      return `
      background-color: #222222;
      `;
    }
    return `
      background-color: #ffffff;
    `;
  }}

  div {
    color: #ffffff;
  }

  @media screen and (max-width: 1400px) and (min-width: 768px) {
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0px;

    ${({ scrollPosition }) => {
      if (scrollPosition > 3550) {
        return `
      background-color: #222222;
      `;
      }
      return `
      background-color: #ffffff;
    `;
    }}
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

const RoadmapTitleContainer = styled.div``;

const RoadmapContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const XyloAnimation = styled.img<IXyloAnimation>`
  position: relative;
  bottom: 0;
  width: 100%;
  max-width: 700px;
  @media screen and (max-width: 1400px) {
    width: 30%;
  }
  ${({ src }) => {
    if (src.includes(`icon-X`)) {
      return `
      left: -10%;
      `;
    }
    if (src.includes(`icon-Y`)) {
      return `
        left: 20%;
      `;
    }
    if (src.includes(`icon-L`)) {
      return `
        left: 48%;
      `;
    }
    if (src.includes(`icon-O`)) {
      return `
        left: 78%;
      `;
    }
    return ``;
  }}
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  ${({ level }) => {
    return `
      animation: floatingXylo 2.${level}s infinite ease-in-out alternate;
    `;
  }}

  @keyframes floatingXylo {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: 15px;
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
  const { navIsOpen } = useSelector(selectCommonSlice);
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: `ease`,
    });
    const scrollListener = () => {
      window.addEventListener(`scroll`, updateScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener(`scroll`, updateScroll);
    };
  }, []);
  const [contentPaging, setContentPaging] = useState<Slider>();
  const [navPaging, setNavPaging] = useState<Slider>();

  return (
    <MainStyled backDark={navIsOpen}>
      <BackgroundSection>
        <BackgroundContent>
          <MainTitle>
            <InnerSection>
              <MainTitleText>
                <div data-aos="fade-up">Outgrowing Blockchain,</div>
                <div data-aos="fade-up" data-aos-delay="300">
                  Rocketing rewards
                </div>
              </MainTitleText>
              <MainSubTitleText>
                <div data-aos="fade-up" data-aos-delay="600">
                  Xylo aims to provide transparent governance with a safer
                  investment platform and create a new financial ecosystem with
                  everyone involved.
                </div>
              </MainSubTitleText>
            </InnerSection>
          </MainTitle>
          <DonutImg data-aos="fade-left" data-aos-duration="2500" />
          <CoinImg data-aos="fade-right" data-aos-duration="2000" />
          <ScrollDownAttach>
            <div data-aos="fade-down" data-aos-once="true">
              <Title size="quinary">Scroll Down</Title>
              <ScrollDown />
            </div>
          </ScrollDownAttach>
        </BackgroundContent>
      </BackgroundSection>
      {isMobile ? (
        <MobileProductSectionStyle>
          <MobileProductSectionContent>
            <MobileProductTop>
              <MobileTopTitleContainer>
                <Title size="quaternary">
                  <div data-aos="fade-up">PRODUCT</div>
                </Title>
              </MobileTopTitleContainer>
              <MobileProductTopContent>
                <Title size="senary">
                  <div data-aos="fade-up">XYLO Application</div>
                </Title>
                <div data-aos="fade-up">
                  An official wallet that can store XYLO
                  <br />
                  ecosystem tokens and blockchain platform
                  <br />
                  that anyone can participate in governance
                  <br />
                  through Community pool investment.
                </div>
              </MobileProductTopContent>
              <div data-aos="fade-up">
                <AnimationLink link="/helpcenter/faq" name="DOWNLOAD" />
              </div>
            </MobileProductTop>
          </MobileProductSectionContent>
          <MobileProductBottom>
            <MobilePhoneImg src={iconPhone} data-aos="flip-right" />
          </MobileProductBottom>
        </MobileProductSectionStyle>
      ) : (
        <ProductSectionStyle>
          <PhoneLayout>
            <PhoneBackground>
              <PhoneImg
                data-aos="flip-right"
                data-aos-delay="500"
                data-aos-duration="1400"
                src={iconPhone}
              />
            </PhoneBackground>
          </PhoneLayout>
          <ProductSectionContent>
            <SliceLeft>
              <Title size="primary">
                <div data-aos="fade-right">PRODUCT</div>
              </Title>
              <ProductContent>
                <Title size="tertiary">
                  <div data-aos="fade-right" data-aos-delay="100">
                    XYLO Application
                  </div>
                </Title>
                <div data-aos="fade-right" data-aos-delay="200">
                  An official wallet that can store XYLO ecosystem tokens
                  <br />
                  and blockchain platform that anyone can participate in
                  <br /> governance through Community pool investment.
                </div>
              </ProductContent>
              <div data-aos="fade-right" data-aos-delay="300">
                <AnimationLink link="/helpcenter/faq" name="DOWNLOAD" />
              </div>
            </SliceLeft>
          </ProductSectionContent>
        </ProductSectionStyle>
      )}
      <KeyServiceSectionStyle>
        <KeyServiceSection>
          <ServiceContent>
            <ServiceTitleContainer data-aos="fade-up">
              <Title size="primary">Key Services</Title>
            </ServiceTitleContainer>
            <ServiceText data-aos="fade-up">
              Experience various blockchain services in xylo such as XO, Wallet
              and Community
            </ServiceText>
          </ServiceContent>
          <SwiperContainer data-aos="fade-up">
            <MainPaging>
              {isMobile ? (
                <Slider
                  asNavFor={navPaging}
                  ref={(slider) => {
                    if (slider) setContentPaging(slider);
                  }}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  <Slider autoplay>
                    {XoData.map((el) => (
                      <MobileXoImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                  <Slider autoplay>
                    {WalletData.map((el) => (
                      <MobileWalletImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                  <Slider autoplay>
                    {CommunityData.map((el) => (
                      <MobileCommunityImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                  <Slider autoplay>
                    {XoData.map((el) => (
                      <MobileXoImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                  <Slider autoplay>
                    {WalletData.map((el) => (
                      <MobileWalletImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                  <Slider autoplay>
                    {CommunityData.map((el) => (
                      <MobileCommunityImage src={el.src} key={el.id} />
                    ))}
                  </Slider>
                </Slider>
              ) : (
                <Slider
                  asNavFor={navPaging}
                  ref={(slider) => {
                    if (slider) setContentPaging(slider);
                  }}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  <SliderItem>
                    {XoData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                  <SliderItem>
                    {WalletData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                  <SliderItem>
                    {CommunityData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                  <SliderItem>
                    {XoData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                  <SliderItem>
                    {WalletData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                  <SliderItem>
                    {CommunityData.map((el) => (
                      <KeyServiceMock src={el.src} key={el.id} />
                    ))}
                  </SliderItem>
                </Slider>
              )}
            </MainPaging>
            <SubPaging>
              <Slider
                asNavFor={contentPaging}
                ref={(slider) => {
                  if (slider) setNavPaging(slider);
                }}
                slidesToShow={3}
                slidesToScroll={1}
              >
                <div>Community</div>
                <div>XO</div>
                <div>Wallet</div>
                <div>Community</div>
                <div>XO</div>
                <div>Wallet</div>
              </Slider>
            </SubPaging>
          </SwiperContainer>
        </KeyServiceSection>
      </KeyServiceSectionStyle>
      <InfoSectionStyle scrollPosition={scrollPosition}>
        <InfoSectionContent>
          <InfoTitleContainer data-aos="fade-up">
            <Title size={isMobile ? `quaternary` : `primary`}>INFO</Title>
          </InfoTitleContainer>
          <InfoContent>
            <DocsContainer data-aos="fade-up">
              <DocsContent>
                <Title size={isMobile ? `senary` : `tertiary`}>XYLO Docs</Title>
                <Image src={iconFolder} alt="folder" />
                <InfoContentText>
                  An official document that provides concepts
                  <br />
                  and guides related to XYLO
                </InfoContentText>
              </DocsContent>
              <AnimationLinkContainer data-aos="fade-right">
                <AnimationLink link="/" name="XYLO DOCS" />
              </AnimationLinkContainer>
            </DocsContainer>
            <HelpContainer data-aos="fade-up" data-aos-delay="100">
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
              <AnimationLinkContainer data-aos="fade-right">
                <AnimationLink link="/helpcenter/faq" name="Help Center" />
              </AnimationLinkContainer>
            </HelpContainer>
            <PaperContainer data-aos="fade-up" data-aos-delay="200">
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
              <AnimationLinkContainer data-aos="fade-right">
                <AnimationLink link="/" name="White Paper" />
              </AnimationLinkContainer>
            </PaperContainer>
          </InfoContent>
        </InfoSectionContent>
      </InfoSectionStyle>
      <RoadmapSectionStyle scrollPosition={scrollPosition}>
        <RoadmapSectionContent>
          <RoadmapTitleContainer>
            <Title size={isMobile ? `quaternary` : `primary`}>
              <div data-aos="fade-up">ROADMAP</div>
            </Title>
          </RoadmapTitleContainer>
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
