import { FC } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import { promotedData, recentlyData } from '../../dummy/noticeData';
import Text from '../../components/Text';
import Line from '../../components/Line';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import iconStar from '../../assets/png/icon-star.png';
import iconUser from '../../assets/png/icon-user.png';
import iconCopy from '../../assets/svg/icon-copy.svg';
import iconFacebook from '../../assets/png/icon-facebook.png';
import iconTwitter from '../../assets/png/icon-twitter.png';
import iconLinked from '../../assets/png/icon-linked.png';
import iconArrowRight from '../../assets/png/arrow-right.png';
import iconPaper from '../../assets/svg/icon-paper.svg';
import BreadCrumbs from '../../components/Partials/BreadCrumbs';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import Icon from '../../components/Icon';

const UserIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
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

const MoveButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

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

const HelpfulButton = styled.button`
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
  margin-top: 16px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const NoticeDetail: FC = () => {
  const noticeId = Number(useParams().id);
  const filteredData = promotedData.filter((data) => data.id === noticeId)[0];

  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <BreadCrumbs />
        <Flex>
          <Box width="820px">
            <Flex>
              <Icon
                url={iconStar}
                width="16px"
                height="16px"
                backgroundSize="contain"
                margin="0 8px 0 0"
              />
              <Text size="24px" weight="700">
                {filteredData.title}
              </Text>
            </Flex>
            <Flex margin="24px 0 58px 0">
              <UserIconBox>
                <Icon
                  url={iconUser}
                  width="28px"
                  height="28px"
                  backgroundSize="contain"
                />
              </UserIconBox>
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
          </Box>
          <Box width="460px" margin="0 0 0 32px">
            <Text size="20px" weight="700">
              Share this Articles
            </Text>
            <ShareArticleBox>
              <CopyLinkButton>
                <Flex justifyContent="center">
                  <Icon
                    url={iconCopy}
                    width="18px"
                    height="18px"
                    margin="0 12px 0 0"
                  />
                  <Text size="16px" weight="700" color="#acacac">
                    Copy link
                  </Text>
                </Flex>
              </CopyLinkButton>
              <ShareButton>
                <Icon
                  url={iconFacebook}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
              </ShareButton>
              <ShareButton>
                <Icon
                  url={iconTwitter}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
              </ShareButton>
              <ShareButton>
                <Icon
                  url={iconLinked}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
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
                <Icon
                  url={iconArrowRight}
                  width="42px"
                  height="20px"
                  backgroundSize="contain"
                />
              </MoveButton>
            </Flex>
            {promotedData.map((data) => (
              <ArticleBox key={data.id}>
                <Flex>
                  <Icon
                    url={iconPaper}
                    width="16px"
                    height="20px"
                    margin="0 14px 0 0"
                  />
                  <Text size="16px">{data.title}</Text>
                </Flex>
              </ArticleBox>
            ))}
          </Box>
        </Flex>
        <Box margin="80px 0 100px 0">
          <Text size="24px" weight="700">
            Was this article helpful?
          </Text>
          <Line margin="16px 0 24px 0" />
          <Flex justifyContent="space-between">
            <Box>
              <Text size="20px">0 out of 0 found this helpful</Text>
              <HelpfulButton>YES</HelpfulButton>
              <Text size="20px">or</Text>
              <HelpfulButton>NO</HelpfulButton>
            </Box>
            <Box>
              <Text size="20px">Have more questions?</Text>
              <SubmitButton>
                <Link to="/helpcenter/submit">Submit a request</Link>
              </SubmitButton>
            </Box>
          </Flex>
        </Box>
        <Flex margin="0 0 121px 0">
          <Box width="624px">
            <Text size="24px" weight="700">
              Recently viewed articles
            </Text>
            <Line />
            {recentlyData.map((data) => (
              <ArticleList>
                <Flex>
                  <Icon
                    url={iconPaper}
                    width="16px"
                    height="20px"
                    backgroundSize="cover"
                    margin="0 14px 0 0"
                  />
                  <Text size="20px">{data.title}</Text>
                </Flex>
              </ArticleList>
            ))}
          </Box>
          <Box width="32px"> </Box>
          <Box width="624px">
            <Text size="24px" weight="700">
              Related articles
            </Text>
            <Line />
            {recentlyData.map((data) => (
              <ArticleList>
                <Flex>
                  <Icon
                    url={iconPaper}
                    width="16px"
                    height="20px"
                    backgroundSize="cover"
                    margin="0 14px 0 0"
                  />
                  <Text size="20px">{data.title}</Text>
                </Flex>
              </ArticleList>
            ))}
          </Box>
        </Flex>
      </NoticeLayout>
    </>
  );
};

export default NoticeDetail;
