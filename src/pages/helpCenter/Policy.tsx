import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Title from '../../components/Title/Title';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Line from '../../components/Line';
import Text from '../../components/Text';
import iconPaper from '../../assets/svg/icon-paper.svg';
import { policyData } from '../../dummy/policyData';
import NoticeLayout from '../../components/Layout/NoticeLayout';
import Icon from '../../components/Icon';
import HelpCenterTitleBox from '../../components/Partials/HelpCenterTitleBox';
import HelpCenterArticleBox from '../../components/Partials/HelpCenterArticleBox';

const Policy: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  return (
    <>
      <HelpCenterLayout />
      <NoticeLayout>
        <HelpCenterTitleBox>
          <Title size={isMobile ? `quinary` : `secondary`}>
            Operating standards and specific regulations
          </Title>
        </HelpCenterTitleBox>
        <Box margin={isMobile ? `0 0 53px 0` : `0 0 120px 0`}>
          <Flex>
            <Text size={isMobile ? `16px` : `24px`} weight="700">
              Operation Policy
            </Text>
          </Flex>
          <Line margin={isMobile ? `12px 0 0 0` : `24px 0 0 0`} />
          {policyData.map((data) => {
            return (
              <Link to={`/helpcenter/policy/policy/${data.id}`} key={data.id}>
                <HelpCenterArticleBox>
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
                </HelpCenterArticleBox>
              </Link>
            );
          })}
        </Box>
      </NoticeLayout>
    </>
  );
};

export default Policy;
