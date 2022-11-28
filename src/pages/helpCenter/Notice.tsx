import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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
import NoticeLayout from '../../components/Layout/NoticeLayout';
import Icon from '../../components/Icon';

const NoticeTitle = styled.div`
  margin: 80px 0;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin: 53px 0;
  }
`;

const ArticleBox = styled.div<{ promoted?: boolean }>`
  padding: 24px 20px;
  font-size: 20px;
  color: #000;
  cursor: pointer;

  ${(props) =>
    props.promoted
      ? ` border: 1px solid #f4f4f4;
          border-radius: 8px;
          box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
          margin-top: 20px;
          @media screen and (max-width: 767px) {
            margin-top: 12px;
          }
          `
      : ``};
`;

const Notice: FC = () => {
  const [currentItems, setCurrentItems] = useState<CurrentItemProps[]>([]);
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <NoticeTitle>
          <Title size={isMobile ? `quinary` : `secondary`}>
            You can check the latest news realated to XYLO
          </Title>
        </NoticeTitle>
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 120px 0`}>
          <Flex alignItems="center">
            <Icon
              url={iconStar}
              width="16px"
              height="16px"
              backgroundSize="contain"
              margin={isMobile ? `0 6px 0 0` : `0 8px 0 0`}
            />
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              Promoted artice
            </Text>
          </Flex>
          <Line margin={isMobile ? `12px 0 0 0` : `24px 0 0 0`} />
          {promotedData.map((data) => {
            return (
              <Link to={`/helpcenter/notice/promoted/${data.id}`} key={data.id}>
                <ArticleBox promoted>
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
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 80px 0`}>
          <Text size={isMobile ? `16px` : `24px`} weight="700">
            Article
          </Text>
          <Line margin={isMobile ? `8px 0 0 0` : `24px 0 0 23px`} />
          {currentItems.map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/helpcenter/notice/article/${data.id}`}>
                  <ArticleBox>
                    <Flex>
                      <Icon
                        url={iconPaper}
                        width="16px"
                        height="20px"
                        backgroundSize="cover"
                        margin="0 14px 0 0"
                      />
                      <Text size={isMobile ? `14px` : `20px`}>
                        {data.title}
                      </Text>
                    </Flex>
                  </ArticleBox>
                </Link>
                {isMobile ? null : <Line color="#f4f4f4" />}
              </div>
            );
          })}
        </Box>
        <CustomPagination
          data={articleData}
          setCurrentItems={setCurrentItems}
          itemsPerPage={8}
        />
      </NoticeLayout>
    </>
  );
};

export default Notice;
