import { FC } from 'react';
import styled from 'styled-components';

interface IconProps {
  width?: string;
  height?: string;
  url: string;
  backgroundSize?: string;
  margin?: string;
}

const StyledIcon = styled.div<IconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ url }) => url});
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-repeat: no-repeat;
  margin: ${({ margin }) => margin};
`;

const Icon: FC<IconProps> = ({
  width,
  height,
  url,
  backgroundSize,
  margin,
}) => {
  return (
    <div>
      <StyledIcon
        width={width}
        height={height}
        url={url}
        backgroundSize={backgroundSize}
        margin={margin}
      />
    </div>
  );
};

export default Icon;
