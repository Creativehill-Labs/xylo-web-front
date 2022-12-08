import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
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
import Icon from '../../components/Icon';
import { faqData } from '../../dummy/faqData';
import { policyData } from '../../dummy/policyData';
import InnerSection from '../../components/Layout/InnerSection';

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
  height: 108px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

const CopyLinkButton = styled.button`
  width: 152px;
  height: 44px;
  border: 1px solid #e2e2e2;
  border-radius: 999px;
  background-color: #fff;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 119px;
    height: 36px;
    margin-left: 16px;
  }
`;

const ShareButton = styled.div`
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  :last-child {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    width: 36px;
    height: 36px;
    margin-left: 20px;
  }
`;

const MoveButton = styled.div`
  cursor: pointer;
  display: flex;
  a {
    display: flex;
    color: #000;
    align-items: center;
  }
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
  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
  :last-child {
    margin-bottom: 0;
  }
  a {
    color: #000;
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
  @media screen and (max-width: 767px) {
    width: 66px;
    height: 33px;
    margin: 0 8px;
    :first-child {
      margin-left: 0;
    }
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
  @media screen and (max-width: 767px) {
    font-size: 14px;
    font-weight: 400;
    width: 129px;
    height: 33px;
  }
`;

const ArticleList = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  a {
    color: #000;
  }
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;

interface DataProps {
  id: number;
  title: string;
  content: string;
  category: string;
}

interface RecentlyViewedProps extends DataProps {
  id: number;
  title: string;
  url: string;
}

const ArticleDetail: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [recentlyData, setRecentlyData] = useState<RecentlyViewedProps[]>([]);
  const [filteredData, setFilteredData] = useState<DataProps>();
  const [inSectionData, setInSectionData] = useState<DataProps[]>([]);
  const [relatedData, setRelatedData] = useState<DataProps[]>([]);
  const { pathname } = useLocation();
  const paramsId = Number(useParams().id);

  const dataUrl = pathname.split(`/`)[2];
  const dataCategory = pathname.split(`/`)[3];

  useEffect(() => {
    const allData = [...faqData, ...policyData];
    setFilteredData(
      allData
        .filter((data) => data.category === dataCategory)
        .filter((data) => data.id === paramsId)[0],
    );
    setInSectionData(
      allData
        .filter((data) => data.category === filteredData?.category)
        .slice(0, 5),
    );
    setRelatedData(
      allData
        .filter((data) => data.category === dataCategory)
        .filter((data) => data.id !== filteredData?.id)
        .slice(0, 5),
    );
  }, [dataCategory, paramsId, filteredData?.id, filteredData?.category]);

  useEffect(() => {
    const newRecently = {
      id: filteredData?.id,
      title: filteredData?.title,
      url: pathname,
    };
    const recently = [
      newRecently,
      ...JSON.parse(localStorage.getItem(`recently`) || `[]`),
    ]
      .filter(
        (data, idx, callback) =>
          idx === callback.findIndex((t) => t.title === data.title),
      )
      .slice(0, 6);
    localStorage.setItem(`recently`, JSON.stringify(recently));
    setRecentlyData(recently);
  }, [filteredData?.id, filteredData?.title, pathname, filteredData]);

  const clickCopyWallet = async () => {
    if (navigator.clipboard) {
      // https
      await navigator.clipboard.writeText(window.location.href);
    } else {
      // http
      const textarea = document.createElement(`textarea`);
      textarea.value = window.location.href;
      textarea.style.top = `0`;
      textarea.style.left = `0`;
      textarea.style.position = `fixed`;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand(`copy`);
      document.body.removeChild(textarea);
    }
  };

  const clickShare = useCallback((sns: string) => {
    const url = encodeURI(window.location.href);
    if (sns === `facebook`) {
      window.open(`http://www.facebook.com/sharer.php?u=${url}`);
    }
    if (sns === `twitter`) {
      window.open(`http://twitter.com/intent/tweet?url=${url}`);
    }
    if (sns === `linkedin`) {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
    }
  }, []);

  return (
    <>
      <HelpCenterLayout />
      <InnerSection>
        <BreadCrumbs />
        <Flex flexDirection={isMobile ? `column` : `row`}>
          <Box width={isMobile ? `` : `788px`}>
            <Flex>
              <Icon
                url={iconStar}
                width="16px"
                height="16px"
                backgroundSize="contain"
                margin={isMobile ? `0 4px 0 0` : `6px 8px 0 0`}
              />
              <Text size={isMobile ? `16px` : `24px`} weight="700">
                {filteredData?.title}
              </Text>
            </Flex>
            <Flex margin={isMobile ? `16px 0 20px 0` : `24px 0 58px 0`}>
              <UserIconBox>
                <Icon
                  url={iconUser}
                  width="28px"
                  height="28px"
                  backgroundSize="contain"
                />
              </UserIconBox>
              <Flex flexDirection="column" justifyContent="center">
                <Text
                  size={isMobile ? `14px` : `16px`}
                  weight="400"
                  color="#202020"
                >
                  XYLO Team
                </Text>
                <Text size="12px" weight="400" color="#202020">
                  5 month ago
                </Text>
              </Flex>
            </Flex>
            <Text size={isMobile ? `14px` : `20px`}>
              {filteredData?.content}
            </Text>
          </Box>
          <Box
            width={isMobile ? `` : `460px`}
            margin={isMobile ? `64px 0 0 0` : `0 0 0 32px`}
          >
            <Text size={isMobile ? `16px` : `20px`} weight="700">
              Share this Articles
            </Text>
            <ShareArticleBox>
              <CopyLinkButton onClick={clickCopyWallet}>
                <Flex justifyContent="center">
                  <Icon
                    url={iconCopy}
                    width="18px"
                    height="18px"
                    margin="0 12px 0 0"
                  />
                  <Text
                    size={isMobile ? `14px` : `16px`}
                    weight="700"
                    color="#acacac"
                  >
                    Copy link
                  </Text>
                </Flex>
              </CopyLinkButton>
              <ShareButton onClick={() => clickShare(`facebook`)}>
                <Icon
                  url={iconFacebook}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
              </ShareButton>
              <ShareButton onClick={() => clickShare(`twitter`)}>
                <Icon
                  url={iconTwitter}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
              </ShareButton>
              <ShareButton onClick={() => clickShare(`linkedin`)}>
                <Icon
                  url={iconLinked}
                  width="20px"
                  height="20px"
                  backgroundSize="contain"
                />
              </ShareButton>
            </ShareArticleBox>

            <Flex
              justifyContent="space-between"
              margin={isMobile ? `60px 0 16px 0` : `60px 0 24px 0`}
            >
              <Box>
                <Text
                  size={isMobile ? `16px` : `20px`}
                  weight="700"
                  display="block"
                >
                  Articles in this section
                </Text>
              </Box>
              {isMobile ? null : (
                <MoveButton>
                  <Link to={`/helpcenter/${dataUrl}/${dataCategory}`}>
                    <Text size="16px" weight="700" margin="0 12px 0 0">
                      Move
                    </Text>
                    <Icon
                      url={iconArrowRight}
                      width="42px"
                      height="16px"
                      backgroundSize="contain"
                    />
                  </Link>
                </MoveButton>
              )}
            </Flex>
            {inSectionData.map((data) => (
              <ArticleBox key={data.id}>
                <Link to={`/helpcenter/${dataUrl}/${dataCategory}/${data.id}`}>
                  <Flex>
                    <Icon
                      url={iconPaper}
                      width="16px"
                      height="20px"
                      margin="0 14px 0 0"
                    />
                    <Text size={isMobile ? `14px` : `16px`}>{data.title}</Text>
                  </Flex>
                </Link>
              </ArticleBox>
            ))}
          </Box>
        </Flex>
        <Box margin={isMobile ? `68px 0 60px 0` : `80px 0 100px 0`}>
          <Text size={isMobile ? `16px` : `24px`} weight="700">
            Was this article helpful?
          </Text>
          <Line margin={isMobile ? `18px 0` : `16px 0 24px 0`} />
          <Flex
            flexDirection={isMobile ? `column` : `row`}
            justifyContent="space-between"
          >
            <Flex
              flexDirection={isMobile ? `column` : `row`}
              alignItems={isMobile ? `` : `center`}
            >
              <Text size={isMobile ? `14px` : `20px`}>
                0 out of 0 found this helpful
              </Text>
              <Box margin={isMobile ? `8px 0 0 0` : `0`}>
                <HelpfulButton>
                  <Text size={isMobile ? `14px` : `20px`}>YES</Text>
                </HelpfulButton>
                <Text size={isMobile ? `16px` : `20px`}>or</Text>
                <HelpfulButton>
                  <Text size={isMobile ? `14px` : `20px`}>NO</Text>
                </HelpfulButton>
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              margin={isMobile ? `25px 0 0 0` : `0`}
            >
              <Text size={isMobile ? `14px` : `20px`}>
                Have more questions?
              </Text>
              <Link to="/helpcenter/submit">
                <SubmitButton>Submit a request</SubmitButton>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Flex
          margin={isMobile ? `0 0 60px 0` : `0 0 121px 0`}
          flexDirection={isMobile ? `column` : `row`}
        >
          <Box width={isMobile ? `` : `624px`}>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              Recently viewed articles
            </Text>
            <Line margin={isMobile ? `18px 0 24px 0` : `16px 0`} />
            {recentlyData.slice(1).map((data, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <ArticleList key={idx}>
                <Link to={`${data.url}`}>
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
                </Link>
              </ArticleList>
            ))}
          </Box>
          <Box width="32px" height="60px">
            {` `}
          </Box>
          <Box width={isMobile ? `` : `624px`}>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              Related articles
            </Text>
            <Line margin={isMobile ? `18px 0 24px 0` : `16px 0`} />
            {relatedData.map((data) => (
              <ArticleList key={data.id}>
                <Link to={`/helpcenter/${dataUrl}/${dataCategory}/${data.id}`}>
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
                </Link>
              </ArticleList>
            ))}
          </Box>
        </Flex>
      </InnerSection>
    </>
  );
};

export default ArticleDetail;
