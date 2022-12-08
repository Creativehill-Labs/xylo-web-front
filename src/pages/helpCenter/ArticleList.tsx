import { FC, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
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
import InnerSection from '../../components/Layout/InnerSection';
import CustomPagination from '../../components/Partials/CustomPagination';

interface DataProps {
  id: number;
  title: string;
  content: string;
  category: string;
}

const ArticleList: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const { pathname } = useLocation();
  const [currentItems, setCurrentItems] = useState<DataProps[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [articleData, setArticleData] = useState<DataProps[]>([]);

  const dataUrl = pathname.split(`/`)[2];
  const dataCategory = pathname.split(`/`)[3];

  useEffect(() => {
    const allData = [...faqData, ...policyData];
    setArticleData(allData.filter((data) => data.category === dataCategory));
  }, [dataCategory]);

  const articleListItems = useMemo(() => {
    if (articleData.length > 5 && !isMobile) {
      return currentItems;
    }
    return articleData;
  }, [articleData, currentItems, isMobile]);

  return (
    <>
      <HelpCenterLayout />
      <InnerSection>
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
          {articleListItems.map((data) => {
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
          {articleData.length > 5 && !isMobile ? (
            <CustomPagination
              data={articleData}
              setCurrentItems={setCurrentItems}
              itemsPerPage={5}
              pageNum={pageNum}
              setPageNum={setPageNum}
              itemOffset={itemOffset}
              setItemOffset={setItemOffset}
            />
          ) : null}
        </Box>
      </InnerSection>
    </>
  );
};

export default ArticleList;
