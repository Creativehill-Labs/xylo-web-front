import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Line from '../../components/Line';
import Text from '../../components/Text';
import iconPaper from '../../assets/svg/icon-paper.svg';
import { promotedData } from '../../dummy/noticeData';

const PolicySection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const PolicyTitle = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const IconPaper = styled.div`
  width: 16px;
  height: 20px;
  background-image: url(${iconPaper});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 14px;
`;

const ArticleBox = styled.div`
  padding: 24px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: #000;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  margin-top: 20px;
`;

const Policy: FC = () => {
  return (
    <>
      <HelpCenterLayout />
      <PolicySection>
        <PolicyTitle>
          <Title size="secondary">
            Operating standards and specific regulations
          </Title>
        </PolicyTitle>
        <Box margin="0 0 120px 0">
          <Text size="24px" weight="700">
            Promoted artice
          </Text>

          <Line margin="24px 0 0 0" />
          {promotedData.map((data) => {
            return (
              <Link to={`promoted/${data.id}`} key={data.id}>
                <ArticleBox>
                  <Flex>
                    <IconPaper />
                    <Text>{data.title}</Text>
                  </Flex>
                </ArticleBox>
              </Link>
            );
          })}
        </Box>
      </PolicySection>
    </>
  );
};

export default Policy;
