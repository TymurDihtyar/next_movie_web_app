'use client'

import {
    Box,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {genresService} from "@/services/genresService";
import {IGenre} from "@/interfaces";
import React, {useEffect, useState} from "react";
import {SubGenreLink} from "@/components/navbar/genres/SubGenreLink";

export const GenreLink = () => {
    const linkColor = useColorModeValue('gray.800', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    const [genreList, setGenreList] = useState<IGenre[]>([])

    useEffect(() => {
        genresService.getAll().then((data) => setGenreList(data.genres))
    }, []);

    return (
        <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
                <Box
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}>
                    Genres
                </Box>
            </PopoverTrigger>
            <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                    {genreList && genreList.map((item) => (
                        <SubGenreLink key={item.name} id={item.id} name={item.name}/>
                    ))}
                </Stack>
            </PopoverContent>
        </Popover>
    );
}