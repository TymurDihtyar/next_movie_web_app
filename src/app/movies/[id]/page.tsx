"use client";

import {usePathname} from "next/navigation";
import {MovieInfo} from "@/components/movie/movieInfo/MovieInfo";
import {useEffect, useState} from "react";
import {IChar, IOneMove, ITrailers} from "@/interfaces";
import {moviesService} from "@/services/moviesService";

export default function MovieInfoPage() {
    const [oneMovie, setOneMovie] = useState<IOneMove>();
    const [characters, setCharacters] = useState<IChar>();
    const [trailers, setTrailers] = useState<ITrailers>();

    const movieId = usePathname().split("/").slice(-1)[0];

    useEffect(() => {
        moviesService.getById(movieId).then(res => setOneMovie(res))
        moviesService.getCharacters(movieId).then(res => setCharacters(res))
        moviesService.getTrailer(movieId).then(res => setTrailers(res))
    }, []);

    return (
        <>
            {oneMovie && characters && trailers && <MovieInfo movieById={oneMovie} characters={characters.cast} trailers={trailers.results}/>}
        </>
    );
}