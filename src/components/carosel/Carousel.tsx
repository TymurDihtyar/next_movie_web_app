'use client';

import { FC, useState } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider, { Settings } from 'react-slick';
import { IMovie } from "@/interfaces";
import { urls } from "@/constants";

const settings: Settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export interface IProps {
    allMovies: IMovie[];
}

const Carousel: FC<IProps> = ({ allMovies }) => {
    const [slider, setSlider] = useState<Slider | null>(null);
    const threeMovies = allMovies ? allMovies.slice(0, 3) : [];

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    return (
        <Box position={'absolute'} height={'800px'} width={'full'} overflow={'hidden'} zIndex={-1} top={0}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color="white"
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color="white"
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Slider {...settings} ref={slider => setSlider(slider)}>
                {threeMovies.map((card, index) => (
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
                                spacing={6}
                                padding={2}
                                w={'full'}
                                maxW={'xl'}
                                position="absolute"
                                bottom={20}
                                left={0}
                            >
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="white">
                                    {card.original_title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                                    {card.overview}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
