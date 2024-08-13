"use client";

import {useEffect, useState} from "react";
import {moviesService} from "@/services/moviesService";
import {IMovie} from "@/interfaces";

export default function Home() {
    // const [movies, setMovies] = useState<IMovie[]>([])
    // const [page, setPage] = useState<string>("1")

    // useEffect(() => {
    //     moviesService.getAll(page).then((data) => setMovies(data.results));
    // }, [page]);

    return (
        <div className="flex items-center justify-center p-8">
            <h1>Home</h1>
        </div>
    );
}
