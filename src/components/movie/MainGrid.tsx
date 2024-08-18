import {FC} from "react";
import {IMovie} from "@/interfaces";
import PosterCard from "@/components/poster/PosterCard";
import {Box, Heading, Grid, Container, Flex} from "@chakra-ui/react";

interface IProps {
    title: string;
    movies: IMovie[];
}

const MainGrid: FC<IProps> = ({title, movies}) => {
    console.log(movies)
    return (
        <Box as="main" minH="100vh">
            <Container maxW="90%" py="10" px={{base: 5, "xl": 0}}>
                <Flex alignItems="center" justifyContent="space-between" mb={8}>
                    <Heading as="h1" fontSize="3xl" fontWeight="black">
                        {title}
                    </Heading>
                </Flex>
                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(5, 1fr)",
                        xl: "repeat(6, 1fr)",
                        "2xl": "repeat(7, 1fr)",
                    }}
                    gap={10}
                >
                    {movies &&
                        movies.map((item: IMovie, index) => (
                            <PosterCard movie={item} key={index}/>
                        ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MainGrid;
