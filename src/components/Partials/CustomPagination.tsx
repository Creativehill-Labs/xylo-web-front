import { FC } from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

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

export interface CurrentItemProps {
  id: number;
  title: string;
}

interface CustomPaginationProps {
  articleData: CurrentItemProps[];
  activePage: number;
  handlePageClick: (e: number) => void;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  articleData,
  activePage,
  handlePageClick,
}) => {
  return (
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
  );
};

export default CustomPagination;
