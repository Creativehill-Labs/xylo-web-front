import { FC } from 'react';
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
import HelpCenterTitleBox from '../../components/Partials/HelpCenterTitleBox';
import HelpCenterArticleBox from '../../components/Partials/HelpCenterArticleBox';

const ArticleList: FC = () => {
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
        <HelpCenterTitleBox>
          <Title size={isMobile ? `quinary` : `secondary`}>
            We’re standing by to help!
          </Title>
        </HelpCenterTitleBox>
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 120px 0`}>
          <Flex>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              {dataCategory.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
            </Text>
          </Flex>
          <Line margin={isMobile ? `12px 0` : `24px 0`} />
          {articleData.map((data) => {
            return (
              <Link
                to={`/helpcenter/${dataUrl}/${dataCategory}/${data.id}`}
                key={data.id}
              >
                <HelpCenterArticleBox>
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
                </HelpCenterArticleBox>
              </Link>
            );
          })}
        </Box>
      </NoticeLayout>
    </>
  );
};

export default ArticleList;
