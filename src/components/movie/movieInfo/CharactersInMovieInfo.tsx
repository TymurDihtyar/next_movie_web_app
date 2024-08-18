import {FC, PropsWithChildren} from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { ICast } from "@/interfaces";
import {urls} from "@/constants/urls";

interface IProps extends PropsWithChildren {
    item: ICast;
}

const CharactersInMovieInfo: FC<IProps> = ({ item }) => {
    return (
        <Box
            textAlign="center"
            fontSize="20px"
            p={3}
            w="150px"
            h="300px"
            transition="transform 0.5s"
            _hover={{ transform: "scale(1.1)" }}
        >
            <Image
                src={item.profile_path ? urls.poster(item.profile_path) : "https://www.trendzbd.com/web/images/miscellaneous/no_image_found.jpg"}
                alt={item.character}
                h="200px"
                mb={2}
                objectFit="cover"
                borderRadius="md"
            />
            <Text>{item.name}</Text>
        </Box>
    );
};

export { CharactersInMovieInfo };
