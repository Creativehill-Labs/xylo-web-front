import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CustomPagination from '../../components/Partials/CustomPagination';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import BreadCrumbs from '../../components/Partials/BreadCrumbs';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Box from '../../components/Box';
import { faqData } from '../../dummy/faqData';
import InnerSection from '../../components/Layout/InnerSection';

const ArticleBox = styled.div<{ isActive?: boolean }>`
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
  ${(props) =>
    props.isActive ? `border: 1px solid #000;` : `border: 1px solid #f4f4f4;`}
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
  const [categoryText, setCategoryText] = useState(`All Categories`);
  const [categoryCount, setCategoryCount] = useState(0);
  const [categoryData, setCategoryData] = useState<DataProps[]>([]);
  const [isClickCategory, setIsClickCategory] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { state } = useLocation();

  useEffect(() => {
    const search = faqData.filter((data) => data.title.includes(`${state}`));
    setSearchData(search);
    setCategoryData(search);
    setCategoryText(`All Categories`);
    setCategoryCount(search.length);
  }, [state]);

  const responsiveData = useMemo(() => {
    if (isMobile) {
      return categoryData;
    }
    return currentItems;
  }, [currentItems, isMobile, categoryData]);

  const clickCategoryData = useMemo(() => {
    if (isClickCategory) {
      return categoryData;
    }
    return searchData;
  }, [categoryData, isClickCategory, searchData]);

  const calNum = useCallback(
    (count: string) => {
      const result = searchData.filter(
        (data) => data.category === count,
      ).length;
      return result;
    },
    [searchData],
  );

  const sliceContent = useCallback((content: string) => {
    let result;
    if (content.length > 60) {
      result = content.slice(0, 65);
    } else {
      result = content;
    }
    return `${result}...`;
  }, []);

  const clickCategory = useCallback(
    (category: string) => {
      const result = searchData.filter((data) => data.category === category);
      setCurrentItems(result);
      setCategoryData(result);
      setIsClickCategory(true);
      let text = category;
      if (category === `pool`) {
        text = `Community Pool`;
      }
      if (category === `owner`) {
        text = `Stadium Owner`;
      }
      if (category === `products`) {
        text = `Supported Products`;
      }
      setCategoryText(text.replace(/\b[a-z]/g, (char) => char.toUpperCase()));
      setCategoryCount(result.length);
      setPageNum(0);
      setItemOffset(0);
      if (isMobile) {
        window.scrollTo(0, 350);
      } else {
        window.scrollTo(0, 550);
      }
    },
    [searchData, isMobile],
  );

  return (
    <>
      <HelpCenterLayout />
      <InnerSection>
        <BreadCrumbs search />

        <Flex flexDirection={isMobile ? `column` : `row`}>
          <Box width={isMobile ? `` : `788px`}>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              {categoryCount} Results for “{state}” in {categoryText}
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
                      <Text
                        size={isMobile ? `14px` : `20px`}
                        weight="700"
                        display="block"
                      >
                        {data.title}
                      </Text>
                    </Box>
                    <Box margin={isMobile ? `4px 0 0 0` : `24px 0`}>
                      <Text size={isMobile ? `14px` : `20px`} display="block">
                        {sliceContent(data.content)}
                      </Text>
                    </Box>
                  </Link>
                </Box>

                {isMobile ? (
                  <Flex justifyContent="flex-end" margin="16px 0 0 0">
                    <Text size="12px" color="rgba(32, 32, 32, 0.5)">
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
            width={isMobile ? `` : `460px`}
            margin={isMobile ? `0` : `0 0 0 32px`}
          >
            <Box margin={isMobile ? `48px 0 16px 0` : `0 0 24px 0`}>
              <Text size={isMobile ? `16px` : `20px`} weight="700">
                By Category
              </Text>
            </Box>

            <ArticleBox
              onClick={() => clickCategory(`account`)}
              isActive={categoryText === `Account`}
            >
              Account ({calNum(`account`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`wallet`)}
              isActive={categoryText === `Wallet`}
            >
              Wallet ({calNum(`wallet`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`pool`)}
              isActive={categoryText === `Community Pool`}
            >
              Community Pool ({calNum(`pool`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`delegate`)}
              isActive={categoryText === `Delegate`}
            >
              Delegate ({calNum(`delegate`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`owner`)}
              isActive={categoryText === `Stadium Owner`}
            >
              Stadium Owner ({calNum(`owner`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`proposal`)}
              isActive={categoryText === `Proposal`}
            >
              Proposal ({calNum(`proposal`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`vote`)}
              isActive={categoryText === `Vote`}
            >
              Vote ({calNum(`vote`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`reward`)}
              isActive={categoryText === `Reward`}
            >
              Reward ({calNum(`reward`)})
            </ArticleBox>
            <ArticleBox
              onClick={() => clickCategory(`products`)}
              isActive={categoryText === `Supported Products`}
            >
              Supported Products ({calNum(`products`)})
            </ArticleBox>
          </Box>
        </Flex>

        <Box>
          {isMobile ? null : (
            <CustomPagination
              data={clickCategoryData}
              setCurrentItems={setCurrentItems}
              itemsPerPage={5}
              pageNum={pageNum}
              setPageNum={setPageNum}
              itemOffset={itemOffset}
              setItemOffset={setItemOffset}
            />
          )}
        </Box>
      </InnerSection>
    </>
  );
};

export default SearchResults;
