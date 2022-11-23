import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomPagination, {
  CurrentItemProps,
} from '../../components/Partials/CustomPagination';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import BreadCrumbs from '../../components/Partials/BreadCrumbs';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Box from '../../components/Box';
import { searchData } from '../../dummy/noticeData';

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
`;

const SearchResults: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState<CurrentItemProps[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 5;
    setCurrentItems(searchData.slice(itemOffset, endOffset));
  }, [itemOffset]);

  const handlePageClick = (e: number) => {
    const newOffset = (e - 1) * 5;
    setItemOffset(newOffset);
    setActivePage(e);
  };
  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <BreadCrumbs />
        <Flex>
          <Box width="820px">
            <Text size="24px" weight="700">
              45 Results for “ABC” in All Categories
            </Text>
            <Line margin="30px 0 0 0" />
            {currentItems.map((data) => (
              <>
                <Box margin="24px 0 24px 0">
                  <Flex justifyContent="space-between">
                    <Text size="14px">
                      XYLO Helpt Cetner {`>`} Proposal {`>`} FAQ
                    </Text>
                    <Text size="14px">March 20.2022 16:04</Text>
                  </Flex>
                  <Box margin="8px 0 0 0">
                    <Text size="20px" weight="700">
                      {data.title}
                    </Text>
                  </Box>
                  <Box margin="24px 0">
                    <Text size="20px">
                      Anyone can register proposals and a certain deposit is
                      required to register.
                    </Text>
                  </Box>
                </Box>
                <Line color="#e3e3e3" />
              </>
            ))}
            <Line color="#000" />
          </Box>
          <Box width="460px" margin="0 0 0 32px">
            <Box margin="0 0 24px 0">
              <Text size="20px" weight="700">
                By Category
              </Text>
            </Box>
            <ArticleBox>All Categories (4)</ArticleBox>
            <ArticleBox>Notice (1)</ArticleBox>
            <ArticleBox>Account (1)</ArticleBox>
            <ArticleBox>Supported Products (1)</ArticleBox>
            <ArticleBox>Vote (1)</ArticleBox>
            <ArticleBox>Delegate (2)</ArticleBox>
            <ArticleBox>Proposal (3)</ArticleBox>
            <ArticleBox>Community Pool (1)</ArticleBox>
            <ArticleBox>Operation Policy (1)</ArticleBox>
          </Box>
        </Flex>
        <Box margin="80px 0 0 0">
          <CustomPagination
            articleData={searchData}
            activePage={activePage}
            handlePageClick={handlePageClick}
            itemsCountPerPage={5}
          />
        </Box>
      </NoticeLayout>
    </>
  );
};

export default SearchResults;
