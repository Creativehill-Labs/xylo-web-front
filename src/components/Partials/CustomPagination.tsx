import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const StyledPage = styled.div<{ emptyData?: boolean }>`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    list-style: none;
    padding: 0;
    font-size: 20px;
    @media screen and (max-width: 767px) {
      margin-bottom: 60px;
    }
    li {
      ${(props) => (props.emptyData ? `display: none;` : `display: flex;`)}
      width: 48px;
      height: 48px;
      justify-content: center;
      align-items: center;
      border: 1px solid #f4f4f4;
      margin-right: 12px;
      border-radius: 4px;
      :last-child {
        margin-right: 0;
      }
      cursor: pointer;
      @media screen and (max-width: 767px) {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }
    }
    a {
      color: black;
    }
  }
  .active {
    background-color: #000;
    a {
      color: #fff;
    }
  }
  .disabled {
    visibility: hidden;
  }
`;

interface DataProps {
  id: number;
  title: string;
  content: string;
  category: string;
}

interface CustomPaginationProps {
  data: DataProps[];
  setCurrentItems: Dispatch<SetStateAction<DataProps[]>>;
  itemsPerPage: number;
}

interface ClickSelected {
  selected: number;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  data,
  setCurrentItems,
  itemsPerPage,
}) => {
  const [pageNum, setPageNum] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState<number>(0);

  const handlePageClick = (e: ClickSelected) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setPageNum(e.selected);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data.length, itemOffset, setCurrentItems, data, itemsPerPage]);

  return (
    <StyledPage emptyData={data.length === 0}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageNum === 1 || pageNum === 2 ? 4 : 5}
        pageCount={pageCount}
        marginPagesDisplayed={0}
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </StyledPage>
  );
};

export default CustomPagination;
