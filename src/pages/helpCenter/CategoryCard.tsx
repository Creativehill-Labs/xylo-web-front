import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';

const CategoryCardStyle = styled.div`
  width: 405px;
  height: 200px;
  border-radius: 16px;
`;

const CategoryCard = () => {
  return (
    <CategoryCardStyle>
      <Title size="quaternary">Account</Title>
    </CategoryCardStyle>
  );
};

export default CategoryCard;
