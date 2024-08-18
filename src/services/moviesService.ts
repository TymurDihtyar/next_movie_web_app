import {IChar, IData, IOneMove, ITrailers} from "@/interfaces";
import {baseURL, urls} from "@/constants/urls";

const options: RequestInit = {
    cache: 'no-cache',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_URL}`,
        'Content-Type': 'application/json',
    },
};

const moviesService = {
    getAll: async (page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}${urls.movies}?page=${page}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні всіх фільмів:', e.message);
            throw new Error(e.message);
        }
    },

    getByType: async ( type: string ,page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}${urls.moviesByType}/${type}?page=${page}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні згідно типів:', e.message);
            throw new Error(e.message);
        }
    },

    getBySearch: async (query:string, page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}${urls.search}?page=${page}&&query=${query}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні при пошуку:', e.message);
            throw new Error(e.message);
        }
    },

    getById: async (id: string): Promise<IOneMove> => {
        try {
            const response = await fetch(`${baseURL}${urls.movie(id)}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні одного фільму:', e.message);
            throw new Error(e.message);
        }
    },

    getTrailer: async (id: string): Promise<ITrailers> => {
        try {
            const response = await fetch(`${baseURL}${urls.trailer(id)}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні трейлерів:', e.message);
            throw new Error(e.message);
        }
    },

    getCharacters: async (id: string): Promise<IChar> => {
        try {
            const response = await fetch(`${baseURL}${urls.characters(id)}`, options);
            return await response.json();
        } catch (error) {
            const e = error as Error;
            console.error('Помилка при отриманні акторів:', e.message);
            throw new Error(e.message);
        }
    },
}

export {moviesService}