import Link from 'next/link';
import {FC, PropsWithChildren} from "react";
import { Box } from '@chakra-ui/react';
import PosterImage from "@/components/poster/PosterImage";
import PosterLabel from "@/components/poster/PosterLabel";
import { IMovie } from "@/interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const PosterCard: FC<IProps> = ({ movie }) => {

    return (
        <Link href={`/movies/${movie.id}`}>
            <Box
                position="relative"
                textAlign="center"
                role="group"
                width={{ base: '140px', md: '180px', lg: '200px' }}
                marginRight={4}
                transition={ "all 0.3s ease"}
                _hover={{
                    transform: "translateY(-10px)",
                }}
            >
                <Box
                    borderRadius={24}
                    _groupHover={{ backgroundColor: 'black' }}
                >
                    <PosterImage src={movie.poster_path} />
                </Box>
                <PosterLabel label={movie.title} />
            </Box>
        </Link>
    );
};

export default PosterCard;
