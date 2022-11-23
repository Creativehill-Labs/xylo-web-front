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
import NoticeLayout from '../../components/Layout/NoticeLayout';
import Icon from '../../components/Icon';

const PolicyTitle = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const ArticleBox = styled.div`
  padding: 24px 20px;
  font-size: 20px;
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
      <NoticeLayout>
        <PolicyTitle>
          <Title size="secondary">
            Operating standards and specific regulations
          </Title>
        </PolicyTitle>

        <Box margin="0 0 120px 0">
          <Flex>
            <Text size="24px" weight="700">
              Operation Policy
            </Text>
          </Flex>
          <Line margin="24px 0 0 0" />
          {promotedData.map((data) => {
            return (
              <Link to={`promoted/${data.id}`} key={data.id}>
                <ArticleBox>
                  <Flex>
                    <Icon
                      url={iconPaper}
                      width="16px"
                      height="20px"
                      backgroundSize="cover"
                      margin="0 14px 0 0"
                    />
                    <Text size="20px">{data.title}</Text>
                  </Flex>
                </ArticleBox>
              </Link>
            );
          })}
        </Box>
      </NoticeLayout>
    </>
  );
};

export default Policy;
