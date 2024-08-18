'use client';

import {FC, PropsWithChildren} from "react";
import {IMovie} from "@/interfaces";
import PosterCard from "@/components/poster/PosterCard";
import SliderContainer from "@/components/slider/SliderContainer";

interface IProps extends PropsWithChildren {
    movies: IMovie[];
    sectionTitle: string;
}

const MoviesSlider: FC<IProps> = ({sectionTitle, movies}) => {
    const slicedMovies = movies?.slice(0, 20);

    return (
        <SliderContainer
            sectionTitle={sectionTitle}
        >
            {slicedMovies?.map((movie) => (
                <PosterCard movie={movie} key={movie.id}/>
            ))}
        </SliderContainer>
    );
};

export default MoviesSlider;
