import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImg from '../../assets/png/background.png';
import Button from '../Input/Button';
import InputText from '../Input/InputText';
import Title from '../Title/Title';

const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url('${BackgroundImg}');
  height: 300px;
  background-size: cover;
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
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchContainer = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Title size="secondary">How can we help you?</Title>
        <InputContainer>
          <InputText placeholder="What are you looking for?" />
          <Link to="/helpcenter/search">
            <Button>Search</Button>
          </Link>
        </InputContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default SearchContainer;
