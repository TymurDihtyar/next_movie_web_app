'use client'

import {FC, PropsWithChildren, useState} from 'react';
import Slider from 'react-slick';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import {Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container,} from '@chakra-ui/react';
import {useRouter} from "next/navigation";
import {IMovie} from "@/interfaces";
import {urls} from "@/constants/urls";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export interface IProps extends PropsWithChildren {
    allMovies: IMovie[];
}

const Carousel: FC<IProps> = ({allMovies}) => {
    const cupMovies = allMovies ? allMovies.slice(0, 5) : [];
    const [slider, setSlider] = useState<Slider | null>(null);
    const router = useRouter()

    const top = useBreakpointValue({base: '90%', md: '50%'});
    const side = useBreakpointValue({base: '30%', md: '40px'});

    return (
        <Box position={'absolute'} height={'800px'} width={'full'} overflow={'hidden'} top={0}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <IconButton
                z-index={20}
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color="white"
                onClick={() => {
                    slider?.slickPrev()
                }}
            >
                <BiLeftArrowAlt size="40px"/>
            </IconButton>
            <IconButton
                z-index={20}
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color="white"
                onClick={() => {
                    slider?.slickNext()
                }}
            >
                <BiRightArrowAlt size="40px"/>
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cupMovies.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${urls.backdrop(card.backdrop_path)})`}
                    >
                        <Container size="container.lg" height="800px" position="relative">
                            <Stack
                                cursor={"pointer"}
                                onClick={() => router.push(`/movies/${card.id}`)}
                                spacing={6}
                                padding={4}
                                w={'full'}
                                maxW={'xl'}
                                position="absolute"
                                bottom={40}
                                left={0}
                                bgColor={"rgba(0, 0, 0, 0.2)"}
                                backdropFilter="blur(20px)"
                                borderRadius="2xl"
                                transition={ "all 0.3s ease"}
                                _hover={{
                                    bgColor: "rgba(0, 0, 0, 0.4)",
                                    backdropFilter: "blur(50px)",
                                    transform: "translateY(-10px)",
                                }}
                            >
                                <Heading
                                    fontSize={{base: '3xl', md: '4xl', lg: '5xl'}} color="pink.400">
                                    {card.original_title}
                                </Heading>
                                <Text fontSize={{base: 'md', lg: 'lg'}} color="white">
                                    {card.overview}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel;
