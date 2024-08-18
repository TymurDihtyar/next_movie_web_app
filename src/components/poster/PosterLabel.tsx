import {FC, PropsWithChildren} from "react";
import { Text } from '@chakra-ui/react';

interface IProps extends PropsWithChildren {
  label: string;
}

const PosterLabel: FC<IProps> = ({ label }) => {
  return (
    <Text
      textTransform="uppercase"
      cursor="pointer"
      fontSize="s"
      letterSpacing={2}
      textAlign="center"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      visibility="hidden"
      color="white"
      _groupHover={{ visibility: 'visible' }}
    >
      {label}
    </Text>
  );
};

export default PosterLabel;
