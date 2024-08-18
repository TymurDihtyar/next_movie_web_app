"use client";

import {usePathname} from "next/navigation";
import MoviePage from "@/components/movie/MoviePage";

export default function GenresPage() {
    const genre = usePathname().split("/").slice(-1)[0];
    return (
        <>
            {genre && <MoviePage title={"Genres"} genre={genre}/>}
        </>
    );
}