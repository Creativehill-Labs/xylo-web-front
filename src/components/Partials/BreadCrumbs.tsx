import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';

const LinkButton = styled.button<{ color?: string; background?: string }>`
  padding: 12px 20px;
  border: none;
  border-radius: 999px;
  background-color: ${({ background }) => background};
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 6px 16px;
  }
`;

const BreadCrumbs: FC<{ search?: boolean }> = ({ search }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [firstPath, setFirstPath] = useState(``);
  const [secondPath, setSecondPath] = useState(``);
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split(`/`);
    setFirstPath(path[2]);
    setSecondPath(path[3]);
  }, [pathname]);

  return (
    <Flex
      alignItems="center"
      margin={isMobile ? `24px 0 40px 0` : `80px 0 60px 0`}
    >
      {search ? (
        <>
          <LinkButton background="#000">
            <Link to="/helpcenter/faq">
              <Text size={isMobile ? `14px` : `16px`}>Help Center</Text>
            </Link>
          </LinkButton>
          <Box margin={isMobile ? `0 4px` : `0 16px`}>
            <Text size={isMobile ? `14px` : `20px`} display="block">
              /
            </Text>
          </Box>
          <Text size={isMobile ? `14px` : `20px`} color="#000" display="block">
            Search results
          </Text>
        </>
      ) : (
        <>
          <LinkButton background="#000">
            <Link to="/helpcenter/faq">
              <Text size={isMobile ? `14px` : `16px`}>Help Center</Text>
            </Link>
          </LinkButton>
          <Box margin={isMobile ? `0 4px` : `0 16px`}>
            <Text size={isMobile ? `14px` : `20px`} display="block">
              /
            </Text>
          </Box>
          <LinkButton background="#aae112">
            <Link to={`/helpcenter/${firstPath}`}>
              <Text size={isMobile ? `14px` : `16px`} color="#000">
                {firstPath.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
              </Text>
            </Link>
          </LinkButton>
          <Box margin={isMobile ? `0 4px` : `0 16px`}>
            <Text size={isMobile ? `14px` : `20px`} display="block">
              /
            </Text>
          </Box>
          <Link to={`/helpcenter/${firstPath}/${secondPath}`}>
            <Text
              size={isMobile ? `14px` : `20px`}
              color="#000"
              display="block"
            >
              {secondPath.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
            </Text>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default BreadCrumbs;
