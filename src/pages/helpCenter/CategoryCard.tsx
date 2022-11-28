import React, { FC } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Title from '../../components/Title/Title';
import AnimationLink from '../../components/Partials/AnimationLink';

const CategoryCardStyle = styled.div<StyleProps>`
  width: 405px;
  height: 200px;
  border: 1px solid #f4f4f4;
  border-radius: 16px;
  box-shadow: 4px 4px 8px rgba(143, 143, 143, 0.1);
  background-image: ${({ src }) => {
    return `url(${src})`;
  }};
  background-repeat: no-repeat;
  background-position: right;
  &:hover {
    background-image: ${({ activeSrc }) => {
      return `url(${activeSrc})`;
    }};
    animation: fill 0.4s forwards;
    div,
    .text {
      color: #ffffff;
    }
    @keyframes fill {
      0% {
        background-color: #ffffff;
      }
      100% {
        background-color: #000000;
      }
    }
  }
  @media screen and (max-width: 768px) {
    //!
    width: 150px;
    height: 195px;
    border-radius: 12px;
    background-position: center;
    background-size: 70% 60%;
  }
`;

const CategoryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 64px);
  padding: 32px 28px;
  gap: 55px;

  @media screen and (max-width: 768px) {
    padding: 20px 18px;
    gap: 80px;
    span {
      font-size: 12px;
    }
  }
`;

interface StyleProps {
  src: string;
  activeSrc: string;
}
interface ICategoryCard extends StyleProps {
  title: string;
  link: string;
}

const CategoryCard: FC<ICategoryCard> = ({ title, link, src, activeSrc }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });

  return (
    <CategoryCardStyle src={src} activeSrc={activeSrc}>
      <CategoryCardContent>
        <Title size={isMobile ? `senary` : `quaternary`}>{title}</Title>
        <AnimationLink name="Move" link={link} />
      </CategoryCardContent>
    </CategoryCardStyle>
  );
};

export default CategoryCard;
