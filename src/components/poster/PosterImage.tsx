
import { Image, useColorMode } from '@chakra-ui/react';
import {urls} from "@/constants/urls";

const PosterImage = ({ src }) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      _groupHover={{ opacity: 0.5 }}
      borderRadius={24}
      src={src ? `${urls.poster(src)}` : 'https://w7.pngwing.com/pngs/130/516/png-transparent-brown-hair-anime-blond-amagi-brilliant-park-fiction-anime-cg-artwork-black-hair-hand-thumbnail.png'}
      style={{
        filter: `drop-shadow(0 0 0.5rem ${
          colorMode === 'light' ? 'gray' : 'black'
        })`,
      }}
      alt={src}
    />
  );
};

export default PosterImage;
