import { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';

const Button = styled.button<{ color?: string; background?: string }>`
  padding: 12px 20px;
  border: none;
  border-radius: 999px;
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  cursor: pointer;
`;

const BreadCrumbs: FC = () => {
  return (
    <Flex alignItems="center" margin="80px 0 60px 0">
      <Button color="#fff" background="#000">
        <Text size="16px">Help Center</Text>
      </Button>
      <Box margin="0 16px">/</Box>
      <Button color="#000" background="#aae112">
        <Text size="16px">Notice</Text>
      </Button>
      <Box margin="0 16px">/</Box>
      <Text size="16px">Policy Discussion</Text>
    </Flex>
  );
};

export default BreadCrumbs;
