import { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CustomPagination from '../../components/Partials/CustomPagination';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import BreadCrumbs from '../../components/Partials/BreadCrumbs';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Box from '../../components/Box';
import { faqData } from '../../dummy/faqData';
import { policyData } from '../../dummy/policyData';

const ArticleBox = styled.div`
  padding: 24px 20px;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const SearchArticle = styled.div`
  a {
    color: #000;
  }
`;

interface DataProps {
  id: number;
  title: string;
  content: string;
  category: string;
}

const SearchResults: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [currentItems, setCurrentItems] = useState<DataProps[]>([]);
  const [searchData, setSearchData] = useState<DataProps[]>([]);
  const { state } = useLocation();

  useEffect(() => {
    const allData = [...faqData, ...policyData];
    const search = allData.filter((data) => data.title.includes(`${state}`));
    setSearchData(search);
  }, [state]);

  const responsiveData = useMemo(() => {
    if (isMobile) {
      return searchData;
    }
    return currentItems;
  }, [currentItems, isMobile, searchData]);

  const calNum = (count: string) => {
    const result = searchData.filter((data) => data.category === count).length;
    return result;
  };

  const clickCategory = (category: string) => {
    const result = searchData.filter((data) => data.category === category);
    setCurrentItems(result);
  };

  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <BreadCrumbs search />
        <Flex>
          <Flex flexDirection={isMobile ? `column` : `row`}>
            <Box width={isMobile ? `320px` : `820px`}>
              <Text size={isMobile ? `16px` : `24px`} weight="700">
                {searchData.length} Results for “ABC” in All Categories
              </Text>
              <Line margin={isMobile ? `12px 0` : `30px 0 0 0`} />
              {responsiveData.map((data) => (
                <SearchArticle key={data.id}>
                  <Box margin={isMobile ? `0` : `24px 0 24px 0`}>
                    <Flex justifyContent="space-between">
                      <Text
                        size={isMobile ? `12px` : `14px`}
                        color="rgba(32, 32, 32, 0.5)"
                      >
                        XYLO Helpt Cetner {`>`}
                        {` `}
                        {data.category.replace(/\b[a-z]/g, (char) =>
                          char.toUpperCase(),
                        )}
                        {` `}
                        {`>`} FAQ
                      </Text>
                      {isMobile ? null : (
                        <Text size="14px" color="rgba(32, 32, 32, 0.5)">
                          March 20.2022 16:04
                        </Text>
                      )}
                    </Flex>
                    <Link to={`/helpcenter/faq/${data.category}/${data.id}`}>
                      <Box margin={isMobile ? `12px 0 0 0` : `8px 0 0 0`}>
                        <Text size={isMobile ? `14px` : `20px`} weight="700">
                          {data.title}
                        </Text>
                      </Box>
                      <Box margin={isMobile ? `0` : `24px 0`}>
                        <Text size={isMobile ? `14px` : `20px`}>
                          {data.content.slice(0, 60)}...
                        </Text>
                      </Box>
                    </Link>
                  </Box>

                  {isMobile ? (
                    <Flex justifyContent="flex-end">
                      <Text size="14px" color="rgba(32, 32, 32, 0.5)">
                        March 20.2022 16:04
                      </Text>
                    </Flex>
                  ) : null}
                  <Line color="#e3e3e3" margin={isMobile ? `` : `0`} />
                </SearchArticle>
              ))}
              {isMobile ? null : <Line color="#000" />}
            </Box>
            <Box
              width={isMobile ? `320px` : `460px`}
              margin={isMobile ? `0` : `0 0 0 32px`}
            >
              <Box margin={isMobile ? `60px 0 16px 0` : `0 0 24px 0`}>
                <Text size={isMobile ? `16px` : `20px`} weight="700">
                  By Category
                </Text>
              </Box>

              <ArticleBox onClick={() => clickCategory(`account`)}>
                Account ({calNum(`account`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`wallet`)}>
                Wallet ({calNum(`wallet`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`pool`)}>
                Community Pool ({calNum(`pool`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`delegate`)}>
                Delegate ({calNum(`delegate`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`owner`)}>
                Stadium Owner ({calNum(`owner`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`proposal`)}>
                Proposal ({calNum(`proposal`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`vote`)}>
                Vote ({calNum(`vote`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`reward`)}>
                Reward ({calNum(`reward`)})
              </ArticleBox>
              <ArticleBox onClick={() => clickCategory(`products`)}>
                Supported Products ({calNum(`products`)})
              </ArticleBox>
            </Box>
          </Flex>
        </Flex>

        <Box margin={isMobile ? `60px 0 0 0` : `80px 0 0 0`}>
          {isMobile ? null : (
            <CustomPagination
              data={searchData}
              setCurrentItems={setCurrentItems}
              itemsPerPage={5}
            />
          )}
        </Box>
      </NoticeLayout>
    </>
  );
};

export default SearchResults;
