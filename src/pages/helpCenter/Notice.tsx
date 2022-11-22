import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomPagination, {
  CurrentItemProps,
} from '../../components/Partials/CustomPagination';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Line from '../../components/Line';
import Text from '../../components/Text';
import { promotedData, articleData } from '../../dummy/noticeData';
import Box from '../../components/Box';
import iconStar from '../../assets/png/icon-star.png';
import iconPaper from '../../assets/svg/icon-paper.svg';
import Flex from '../../components/Flex';

const NoticeSection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const NoticeTitle = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const IconStar = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${iconStar});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const IconPaper = styled.div`
  width: 16px;
  height: 20px;
  background-image: url(${iconPaper});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 14px;
`;

const ArticleBox = styled.div<{ promoted?: boolean }>`
  padding: 24px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: #000;

  ${(props) =>
    props.promoted
      ? ` border: 1px solid #f4f4f4;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  margin-top: 20px;`
      : ``};
`;

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
        <Box margin="0 0 120px 0">
          <Flex>
            <IconStar />
            <Text size="24px" weight="700">
              Promoted artice
            </Text>
          </Flex>
          <Line margin="24px 0 0 0" />
          {promotedData.map((data) => {
            return (
              <Link to={`promoted/${data.id}`} key={data.id}>
                <ArticleBox promoted>
                  <Flex>
                    <IconPaper />
                    <Text>{data.title}</Text>
                  </Flex>
                </ArticleBox>
              </Link>
            );
          })}
        </Box>
        <Box margin="0 0 80px 0">
          <Text size="24px" weight="700">
            Article
          </Text>
          <Line margin="24px 0 0 23px" />
          {currentItems.map((data) => {
            return (
              <div key={data.id}>
                <Link to="/">
                  <ArticleBox>
                    <Flex>
                      <IconPaper />
                      <Text>{data.title}</Text>
                    </Flex>
                  </ArticleBox>
                </Link>
                <Line color="#f4f4f4" />
              </div>
            );
          })}
        </Box>
        <CustomPagination
          articleData={articleData}
          activePage={activePage}
          handlePageClick={handlePageClick}
        />
      </NoticeSection>
    </>
  );
};

export default Notice;
