import { useState, KeyboardEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import BackgroundImg from '../../assets/png/background.png';
import Button from '../Input/Button';
import InputStyle from '../Input/InputText';
import Title from '../Title/Title';

const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url('${BackgroundImg}');
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    height: 230px;
    background-size: 200% 200%;
    background-position: 55% 10%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  padding-top: 40px;
  div {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    gap: 40px;
    padding-top: 60px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    gap: 12px;
    input[type='text'] {
      width: 217px;
      height: 47px;
      font-weight: 700;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;

const SearchContainer = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(``);

  const enterKeyword = (e: KeyboardEvent) => {
    if (e.code === `Enter`) {
      window.scrollTo(0, 0);
      navigate(`/helpcenter/search`, {
        state: keyword,
      });
      setKeyword(``);
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        <Title size={isMobile ? `quaternary` : `secondary`}>
          How can we help you?
        </Title>
        <InputContainer>
          <InputStyle
            type="text"
            placeholder="What are you looking for?"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={(e) => enterKeyword(e)}
          />
          <Link
            to="/helpcenter/search"
            state={keyword}
            onClick={() => {
              window.scrollTo(0, 0);
              setKeyword(``);
            }}
          >
            <Button
              width={isMobile ? `91px` : undefined}
              height={isMobile ? `47px` : undefined}
            >
              Search
            </Button>
          </Link>
        </InputContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default SearchContainer;
