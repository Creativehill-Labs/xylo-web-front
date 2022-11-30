import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Line from '../../components/Line';
import Text from '../../components/Text';
import iconPaper from '../../assets/svg/icon-paper.svg';
import { policyData } from '../../dummy/policyData';
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
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <PolicyTitle>
          <Title size={isMobile ? `quinary` : `secondary`}>
            Operating standards and specific regulations
          </Title>
        </PolicyTitle>
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 120px 0`}>
          <Flex>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              Operation Policy
            </Text>
          </Flex>
          <Line margin={isMobile ? `12px 0 0 0` : `24px 0 0 0`} />
          {policyData.map((data) => {
            return (
              <Link to={`/helpcenter/policy/policy/${data.id}`} key={data.id}>
                <ArticleBox>
                  <Flex>
                    <Icon
                      url={iconPaper}
                      width="16px"
                      height="20px"
                      backgroundSize="cover"
                      margin="0 14px 0 0"
                    />
                    <Text size={isMobile ? `14px` : `20px`}>{data.title}</Text>
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
