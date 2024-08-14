"use client";

import Carousel from "@/components/carosel/Carousel";
import {useEffect, useState} from "react";
import {IData, IMovie} from "@/interfaces";
import {moviesService} from "@/services/moviesService";

export default function Home() {

    const [allMovies, setAllMovies] = useState<IData>({} as IData)
    const [page, setPage] = useState<string>("1")

    useEffect(() => {
        moviesService.getAll(page).then((data) => setAllMovies(data))
    }, [page])

    return (
        <div className="flex items-center justify-center">
            <Carousel allMovies={allMovies.results}/>
        </div>
    );
}
