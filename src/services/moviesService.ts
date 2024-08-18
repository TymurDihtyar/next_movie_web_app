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
            const response = await fetch(`${baseURL}/${urls.movies}?page=${page}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },

    getByType: async ( type: string ,page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}/${urls.moviesByType}/${type}?page=${page}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },

    getBySearch: async (query:string, page: number): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}/${urls.search}?page=${page}&&query=${query}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },

    getById: async (id: string): Promise<IOneMove> => {
        try {
            const response = await fetch(`${baseURL}/${urls.movie(id)}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },

    getTrailer: async (id: string): Promise<ITrailers> => {
        try {
            const response = await fetch(`${baseURL}/${urls.trailer(id)}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },

    getCharacters: async (id: string): Promise<IChar> => {
        try {
            const response = await fetch(`${baseURL}/${urls.characters(id)}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            throw new Error(error)
        }
    },
}

export {moviesService}