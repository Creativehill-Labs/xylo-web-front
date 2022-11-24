import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';

const LinkButton = styled.button<{ color?: string; background?: string }>`
  padding: 12px 20px;
  border: none;
  border-radius: 999px;
  background-color: ${({ background }) => background};
  cursor: pointer;
`;

const BreadCrumbs: FC<{ search?: boolean }> = ({ search }) => {
  const [firstPath, setFirstPath] = useState(``);
  const [secondPath, setSecondPath] = useState(``);
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split(`/`);
    setFirstPath(path[2]);
    setSecondPath(path[3]);
  }, [pathname]);

  return (
    <Flex alignItems="center" margin="80px 0 60px 0">
      {search ? (
        <>
          <LinkButton background="#000">
            <Link to="/helpcenter/faq">
              <Text size="16px">Help Center</Text>
            </Link>
          </LinkButton>
          <Box margin="0 16px">/</Box>
          <Text size="20px" color="#000">
            Search results
          </Text>
        </>
      ) : (
        <>
          <LinkButton background="#000">
            <Link to="/helpcenter/faq">
              <Text size="16px">Help Center</Text>
            </Link>
          </LinkButton>
          <Box margin="0 16px">/</Box>
          <LinkButton background="#aae112">
            <Link to={`/helpcenter/${firstPath}`}>
              <Text size="16px" color="#000">
                {firstPath.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
              </Text>
            </Link>
          </LinkButton>
          <Box margin="0 16px">/</Box>
          <Link to={`/helpcenter/${firstPath}/${secondPath}`}>
            <Text size="20px" color="#000">
              {secondPath.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
            </Text>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default BreadCrumbs;
