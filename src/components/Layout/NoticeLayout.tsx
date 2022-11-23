import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

interface NoticeLayoutProps {
  children: ReactNode;
}

const NoticeLayout: FC<NoticeLayoutProps> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default NoticeLayout;
