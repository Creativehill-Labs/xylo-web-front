import { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import { promotedData } from '../../dummy/noticeData';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import iconStar from '../../assets/png/icon-star.png';
import iconUser from '../../assets/png/icon-user.png';
import iconClip from '../../assets/svg/icon-clip.svg';
import iconFacebook from '../../assets/png/icon-facebook.png';
import iconTwitter from '../../assets/png/icon-twitter.png';
import iconLinked from '../../assets/png/icon-linked.png';
import iconArrowRight from '../../assets/png/arrow-right.png';
import iconPaper from '../../assets/svg/icon-paper.svg';
import BreadCrumbs from '../../components/Partials/BreadCrumbs';

const NoticeDetailSection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const NoticeDetailContent = styled.div`
  width: 820px;
`;

const IconStar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${iconStar});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const IconUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  div {
    width: 28px;
    height: 28px;
    background-image: url(${iconUser});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const NoticeDetailArticle = styled.div`
  margin-left: 32px;
  width: 460px;
`;

const ShareArticleBox = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 16px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  width: 460px;
  height: 108px;
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

const IconClip = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${iconClip});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
`;

const CopyLinkButton = styled.button`
  width: 152px;
  height: 44px;
  border: 1px solid #e2e2e2;
  border-radius: 999px;
  background-color: #fff;
  margin-left: 40px;
  cursor: pointer;
`;

const ShareButton = styled.div`
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  cursor: pointer;
`;

const IconSNS = styled.div<{ icon: string }>`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;

  ${({ icon }) => {
    if (icon === `facebook`) {
      return `background-image: url(${iconFacebook});`;
    }
    if (icon === `twitter`) {
      return `background-image: url(${iconTwitter});`;
    }
    if (icon === `linked`) {
      return `background-image: url(${iconLinked});`;
    }
    return ``;
  }}
`;

const MoveButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconArrowRight = styled.div`
  background-image: url(${iconArrowRight});
  width: 42px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ArticleBox = styled.div<{ promoted?: boolean }>`
  padding: 24px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: #000;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(143, 143, 143, 0.1);
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
`;

const IconPaper = styled.div`
  width: 16px;
  height: 20px;
  background-image: url(${iconPaper});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 14px;
`;

const NoticeButton = styled.button`
  width: 63px;
  height: 43px;
  border: none;
  border-radius: 999px;
  background-color: #e3e3e3;
  font-size: 16px;
  margin: 0 16px;
  padding: 0;
  cursor: pointer;
  :hover {
    background-color: #aae112;
    transition: 0.5s;
  }
`;

const SubmitButton = styled.button`
  width: 168px;
  height: 43px;
  border: none;
  border-radius: 999px;
  background-color: #000;
  font-size: 16px;
  margin-left: 16px;
  padding: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
`;

const ArticleList = styled.div`
  padding: 24px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: #000;
`;

const ArticleBottom = styled.div`
  margin-bottom: 121px;
  display: flex;
`;

const Article = styled.div`
  width: 624px;
`;

const SpaceBox = styled.div`
  width: 32px;
`;

const NoticeDetail: FC = () => {
  const noticeId = Number(useParams().id);
  const filteredData = promotedData.filter((data) => data.id === noticeId)[0];

  return (
    <>
      <HelpCenterLayout />
      <NoticeDetailSection>
        <BreadCrumbs />
        <Flex>
          <NoticeDetailContent>
            <Text size="24px" weight="700">
              <IconStar />
              {filteredData.title}
            </Text>
            <Flex margin="24px 0 58px 0">
              <IconUser>
                <div />
              </IconUser>
              <Flex flexDirection="column" justifyContent="center">
                <Text size="16px" weight="400" color="#202020">
                  XYLO Team
                </Text>
                <Text size="12px" weight="400" color="#202020">
                  5 month ago
                </Text>
              </Flex>
            </Flex>
            <Text size="20px">
              Greetings from XYLO Team! The XYLO App reflecting the DAO-based
              community feature will be updated soon. You can directly
              participate in XYLO’s proposals and vote through this update. The
              community pool’s fund management plan or XYLO-related policies are
              decided on the voting results. The first agenda is ‘Penalty
              adjustment related to the withdrawal and change of the SO
              delegation’. This policy regarding the penalty was the matter that
              many SOM have been curious about and suggested. It is significant
              for the SOM to agree and decide on this essential policy within
              XYLO Agenda: Adjustment of SO delegation withdrawal and change
              penalty Content: Change the current penalty from 10% to 1% After a
              significant discussion in the forum, the final decision-making
              process for policy changes will be made through voting in the
              community within the XYLO App. We ask for your interest and
              participation from SO and SOM in this first policy discussion so
              that we can get one step closer to the true DAO pursued by XYLO
              through the governance agreement. After the discussion, details of
              the voting methods can be found in Docs on the XYLO website. We
              will do our best to meet your expectations. XYLO Team
            </Text>
          </NoticeDetailContent>
          <NoticeDetailArticle>
            <Text size="20px" weight="700">
              Share this Articles
            </Text>
            <ShareArticleBox>
              <CopyLinkButton>
                <Flex justifyContent="center">
                  <IconClip />
                  <Text size="16px" weight="700" color="#acacac">
                    Copy link
                  </Text>
                </Flex>
              </CopyLinkButton>
              <ShareButton>
                <IconSNS icon="facebook" />
              </ShareButton>
              <ShareButton>
                <IconSNS icon="twitter" />
              </ShareButton>
              <ShareButton>
                <IconSNS icon="linked" />
              </ShareButton>
            </ShareArticleBox>
            <Flex justifyContent="space-between" margin="60px 0 24px 0">
              <Box>
                <Text size="20px" weight="700">
                  Articles in this section
                </Text>
              </Box>
              <MoveButton>
                <Text size="16px" weight="700" margin="0 12px 0 0">
                  Move
                </Text>
                <IconArrowRight />
              </MoveButton>
            </Flex>
            {promotedData.map((data) => (
              <ArticleBox key={data.id}>
                <Flex>
                  <IconPaper />
                  <Text size="16px">{data.title}</Text>
                </Flex>
              </ArticleBox>
            ))}
          </NoticeDetailArticle>
        </Flex>
        <Box margin="80px 0 100px 0">
          <Text size="24px" weight="700">
            Was this article helpful?
          </Text>
          <Line margin="16px 0 24px 0" />
          <Flex justifyContent="space-between">
            <Box>
              <Text size="20px">0 out of 0 found this helpful</Text>
              <NoticeButton>YES</NoticeButton>
              <Text size="20px">or</Text>
              <NoticeButton>NO</NoticeButton>
            </Box>
            <Box>
              <Text size="20px">Have more questions?</Text>
              <SubmitButton>Submit a request</SubmitButton>
            </Box>
          </Flex>
        </Box>
        <ArticleBottom>
          <Article>
            <Text size="24px" weight="700">
              Recently viewed articles
            </Text>
            <Line />
            <ArticleList>qweqweqweqwe</ArticleList>
            <ArticleList>asdasdasdasd</ArticleList>
          </Article>
          <SpaceBox> </SpaceBox>
          <Article>
            <Text size="24px" weight="700">
              Related articles
            </Text>
            <Line />
            <ArticleList>qweqweqweqwe</ArticleList>
            <ArticleList>asdasdasdasd</ArticleList>
            <ArticleList>zxczxczxczxc</ArticleList>
          </Article>
        </ArticleBottom>
      </NoticeDetailSection>
    </>
  );
};

export default NoticeDetail;
