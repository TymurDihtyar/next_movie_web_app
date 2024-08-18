import {IData, IGenres} from "@/interfaces";
import {baseURL, urls} from "@/constants/urls";

const options: RequestInit = {
    cache: 'no-cache',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_URL}`,
        'Content-Type': 'application/json',
    },
};

const genresService = {
    getAll: async (): Promise<IGenres> => {
        try {
            const response = await fetch(`${baseURL}/${urls.genre}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні жанрів:', e.message);
            throw new Error(e.message);
        }
    },

    getByGenreIdMovies: async (with_genres: string, page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}/${urls.movies}?page=${page}&&with_genres=${with_genres}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні фільмів:', e.message);
            throw new Error(e.message);
        }
    },
}


export {genresService}