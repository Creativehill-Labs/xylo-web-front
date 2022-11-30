import { FC } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import Title from '../../components/Title/Title';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Icon from '../../components/Icon';
import iconPaper from '../../assets/svg/icon-paper.svg';
import { faqData } from '../../dummy/faqData';
import { policyData } from '../../dummy/policyData';

const ArticleListTitle = styled.div`
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

const Faq: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const { pathname } = useLocation();

  const dataUrl = pathname.split(`/`)[2];
  const dataCategory = pathname.split(`/`)[3];
  const allData = [...faqData, ...policyData];
  const articleData = allData.filter((data) => data.category === dataCategory);

  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <ArticleListTitle>
          <Title size={isMobile ? `quinary` : `secondary`}>
            We’re standing by to help!
          </Title>
        </ArticleListTitle>
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 120px 0`}>
          <Flex>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              {dataCategory.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
            </Text>
          </Flex>
          <Line margin={isMobile ? `12px 0 0 0` : `24px 0 0 0`} />
          {articleData.map((data) => {
            return (
              <Link
                to={`/helpcenter/${dataUrl}/${dataCategory}/${data.id}`}
                key={data.id}
              >
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

export default Faq;
