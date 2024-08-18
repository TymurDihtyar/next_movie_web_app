"use client";

import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import ReactStars from "react-stars"
import {Box, Image, Text, Heading, Flex, VStack, HStack, AspectRatio, useColorModeValue} from "@chakra-ui/react";
import {ICast, IOneMove, ITrailer} from "@/interfaces";
import {CharactersInMovieInfo} from "@/components/movie/movieInfo/CharactersInMovieInfo";
import {urls} from "@/constants/urls";

interface IProps extends PropsWithChildren {
    movieById: IOneMove;
    characters: ICast[];
    trailers: ITrailer[];
}

const MovieInfo: FC<IProps> = ({movieById, characters, trailers}) => {
    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movieById;
    const teaser = trailers.filter((item) => item.type === 'Teaser' || item.type === 'Trailer');

    const hoverColor = useColorModeValue('gray.800', 'gray.200');

    return (
        <VStack spacing={8} align="center" p={8}>
            <Flex direction={{base: "column", md: "row"}} justify="center" align="center">
                <Image
                    src={poster_path ? urls.poster(poster_path) : 'https://w7.pngwing.com/pngs/130/516/png-transparent-brown-hair-anime-blond-amagi-brilliant-park-fiction-anime-cg-artwork-black-hair-hand-thumbnail.png'}
                    alt={original_title}
                    borderRadius="lg"
                    boxShadow="lg"
                    maxW="500px"
                    mb={{base: 4, md: 0}}
                    h="auto"
                />
                <VStack spacing={4} align="start" pl={{base: 0, md: 8}} w="full">
                    <Heading size="2xl" color={'pink.400'}>{original_title}</Heading>
                    <HStack>
                        <Heading size="lg">Genres:</Heading>
                        <Flex wrap="wrap" alignItems="center">
                            {genres.map((genre) => (
                                <Text key={genre.id} fontSize="2xl" ml={2} color={'pink.400'}
                                      cursor={"pointer"}
                                      _hover={{color: hoverColor}}>
                                    <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
                                </Text>
                            ))}
                        </Flex>
                    </HStack>
                    <HStack>
                        <Heading size="lg">Rating:</Heading>
                        <ReactStars count={10} size={24} color2={'#ffd700'} value={Math.round(vote_average * 10) / 10}/>
                        <Text fontSize="2xl" color={'pink.400'}>{Math.round(vote_average * 10) / 10}</Text>
                    </HStack>
                    <Text fontSize="lg" textAlign="justify" w="500px">{overview}</Text>
                    <Text fontSize="lg">Release date: {release_date}</Text>
                    <Text fontSize="lg">Runtime: {runtime} min</Text>
                </VStack>
            </Flex>
            <Box w="full" px={8}>
                <Heading size="lg" mb={4} color={'pink.400'}>Teaser:</Heading>
                <AspectRatio ratio={16 / 9} maxW="full">
                    <iframe
                        src={`https://www.youtube.com/embed/${teaser.length ? teaser[0].key : "dQw4w9WgXcQ"}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{borderRadius: "20px", boxShadow: "lg"}}
                    />
                </AspectRatio>
            </Box>
            <Box w="full" px={8}>
                <Heading size="lg" mb={4} color={'pink.400'}>Main Cast:</Heading>
                <Flex wrap="wrap" justify="start" align="center">
                    {characters.map((item) => (
                        <CharactersInMovieInfo key={item.id} item={item}/>
                    ))}
                </Flex>
            </Box>
        </VStack>
    );
};

export {MovieInfo};
