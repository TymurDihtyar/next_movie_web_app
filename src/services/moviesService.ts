import {baseURL, urls} from "@/constants";

import {IData, IOneMove, ITrailers} from "@/interfaces";

const options: RequestInit = {
    cache: 'force-cache',
    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_URL}`,
        'Content-Type': 'application/json',
    },
};

const moviesService = {
    getAll: async (page: string): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}/${urls.movies}?page=${page}`, options);
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

}

export {moviesService}