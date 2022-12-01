import { FC } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import EmptyNotice from '../../assets/png/empty-notice.png';
import HelpCenterTitleBox from '../../components/Partials/HelpCenterTitleBox';

const NoticeTitle = styled(HelpCenterTitleBox)`
  @media screen and (max-width: 767px) {
    margin: 40px 0 20px 0;
  }
`;

const NoticeEmptyImage = styled.div`
  margin-top: 99px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 332px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    img {
      max-width: 166px;
    }
  }
`;

const Notice: FC = () => {
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
        <NoticeEmptyImage>
          <img src={EmptyNotice} alt="emptynotice" />
        </NoticeEmptyImage>
        <Flex
          justifyContent="center"
          margin={isMobile ? `0 0 100px 0` : `0 0 226px 0`}
        >
          <Text size={isMobile ? `16px` : `24px`} weight="700">
            There are no notices
          </Text>
        </Flex>
      </NoticeLayout>
    </>
  );
};

export default Notice;
