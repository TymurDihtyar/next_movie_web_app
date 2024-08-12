"use client";

import {useEffect, useState} from "react";
import {moviesService} from "@/services/moviesService";

export default function Home() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState("1")

    useEffect(() => {
        moviesService.getAll(page).then(({results})=>setMovies(results));
    }, [page]);

    return (
        <div className="flex items-center justify-center p-8">
            {movies && movies.length > 0 ? (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>{movie.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No movies found</p>
            )}

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setPage(String(parseInt(page) + 1))}
            >
                Load More
            </button>

        </div>
    );
}
