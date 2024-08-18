import { VStack } from "@chakra-ui/react";
import Carousel from "@/components/carosel/Carousel";
import { moviesService } from "@/services/moviesService";
import MoviesSlider from "@/components/slider/MoviesSlider";

export default async function Home() {
    const page = 1;
    const moviesNowPlaying = await moviesService.getByType("now_playing", page);
    const moviesTopRated = await moviesService.getByType("top_rated", page);
    const moviesUpcoming = await moviesService.getByType("upcoming", page);

    return (
        <VStack spacing={8} align="center" mt="800px" zIndex={1}>
            {/*{moviesNowPlaying && <Carousel allMovies={moviesNowPlaying.results} />}*/}
            {moviesTopRated && <MoviesSlider movies={moviesTopRated.results} sectionTitle="Top Rated" />}
            {moviesUpcoming && <MoviesSlider movies={moviesUpcoming.results} sectionTitle="Upcoming" />}
            {moviesNowPlaying && <MoviesSlider movies={moviesNowPlaying.results} sectionTitle="Now Playing" />}
        </VStack>
    );
}
