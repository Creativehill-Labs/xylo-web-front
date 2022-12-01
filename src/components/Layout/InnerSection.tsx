import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 4%;
  }
`;

interface InnerSectionProps {
  children: ReactNode;
}

const InnerSection: FC<InnerSectionProps> = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>;
};

export default InnerSection;
