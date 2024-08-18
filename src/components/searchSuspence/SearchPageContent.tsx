
"use client";
import MoviePage from "@/components/movie/MoviePage";
import { useSearchParams } from "next/navigation";

const SearchPageContent = () => {
    const searchParams = useSearchParams();
    const searchText = searchParams.get('query');

    return (
        <>
            {searchText && <MoviePage searchText={searchText} title={`Search by ${searchText}`} />}
        </>
    );
};

export default SearchPageContent