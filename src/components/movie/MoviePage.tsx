"use client";

import React, { useEffect, useState, useRef } from "react";
import { IMovie } from "@/interfaces";
import MainGrid from "@/components/movie/MainGrid";
import { moviesService } from "@/services/moviesService";
import { genresService } from "@/services/genresService";

const SCROLL_THRESHOLD = 150;

interface IProps {
    movieType?: string;
    searchText?: string;
    genre?: string;
    title: string;
}

const MoviePage: React.FC<IProps> = ({ movieType, searchText, genre, title }) => {
    const [page, setPage] = useState(2);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    const scrollPositionRef = useRef<number>(0);
    const initialLoad = useRef<boolean>(true);

    const getMovieList = async (page: number, shouldReset: boolean = false) => {
        let results, total_pages;

        if (movieType) {
            const response = await moviesService.getByType(movieType, page);
            results = response.results;
            total_pages = response.total_pages;
        } else if (searchText) {
            const response = await moviesService.getBySearch(searchText, page);
            results = response.results;
            total_pages = response.total_pages;
        } else if (genre) {
            const response = await genresService.getByGenreIdMovies(genre, page);
            results = response.results;
            total_pages = response.total_pages;
        } else {
            const response = await moviesService.getAll(page);
            results = response.results;
            total_pages = response.total_pages;
        }
        setTotalPages(total_pages);
        setMovies((prevMovies) => shouldReset ? results : [...prevMovies, ...results]);
    };

    const loadInitialPages = async () => {
        await getMovieList(1, true);
        getMovieList(2);
    };

    useEffect(() => {
        if (initialLoad.current) {
            initialLoad.current = false;
            return;
        }
        setPage(2);
        setMovies([]);
        loadInitialPages();
    }, [searchText, movieType, genre]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageBottomPosition = document.body.offsetHeight - SCROLL_THRESHOLD;

            if (scrollPosition >= pageBottomPosition && page < totalPages) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [page, totalPages]);

    useEffect(() => {
        // Збереження позиції прокрутки перед оновленням компонента
        scrollPositionRef.current = window.scrollY;
    });

    useEffect(() => {
        if (page > 2) { // Завантажуємо дані лише якщо сторінка більша за 2
            getMovieList(page);
        }
    }, [page]);

    useEffect(() => {
        // Відновлення позиції прокрутки після оновлення компонента
        window.scrollTo(0, scrollPositionRef.current);
    });

    return (
        <MainGrid title={title} movies={movies} />
    );
};

export default MoviePage;
