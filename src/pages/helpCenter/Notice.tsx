import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Line from '../../components/Line';
import Text from '../../components/Text';
import { promotedData, articleData } from '../../dummy/noticeData';

const NoticeSection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const NoticeTitle = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const PromotedArticles = styled.div`
  margin-bottom: 120px;
`;

const NoticeArticles = styled.div`
  margin-bottom: 80px;
`;

const ArticleBox = styled.div<{ promoted?: boolean }>`
  padding: 24px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  ${(props) =>
    props.promoted
      ? ` border: 1px solid #f4f4f4;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  margin-top: 20px;`
      : ``}
`;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    width: 48px;
    height: 48px;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    :last-child {
      margin-right: 0;
    }
  }
  ul.pagination li a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
  }
  ul.pagination li.active a {
    color: #fff;
  }
  ul.pagination li.active {
    background-color: #000;
  }
`;

interface CurrentItemProps {
  id: number;
  title: string;
}

const Notice: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState<CurrentItemProps[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 8;
    setCurrentItems(articleData.slice(itemOffset, endOffset));
  }, [itemOffset]);

  const handlePageClick = (e: number) => {
    const newOffset = (e - 1) * 8;
    setItemOffset(newOffset);
    setActivePage(e);
  };

  return (
    <>
      <HelpCenterLayout />
      <NoticeSection>
        <NoticeTitle>
          <Title size="secondary">
            You can check the latest news realated to XYLO
          </Title>
        </NoticeTitle>
        <PromotedArticles>
          <Text size="24px" weight="700">
            Promoted artice
          </Text>
          <Line margin="24px 0 0 0" />
          {promotedData.map((data) => {
            return (
              <ArticleBox key={data.id} promoted>
                {data.title}
              </ArticleBox>
            );
          })}
        </PromotedArticles>
        <NoticeArticles>
          <Text size="24px" weight="700">
            Article
          </Text>
          <Line margin="24px 0 0 23px" />
          {currentItems.map((data) => {
            return (
              <div key={data.id}>
                <ArticleBox>{data.title}</ArticleBox>
                <Line color="#f4f4f4" />
              </div>
            );
          })}
        </NoticeArticles>
        <PaginationBox>
          <Pagination
            totalItemsCount={articleData.length}
            activePage={activePage}
            itemsCountPerPage={8}
            onChange={handlePageClick}
            pageRangeDisplayed={4}
            hideFirstLastPages
          />
        </PaginationBox>
      </NoticeSection>
    </>
  );
};

export default Notice;
