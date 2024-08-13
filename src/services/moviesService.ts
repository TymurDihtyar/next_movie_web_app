import {baseURL, urls} from "@/constants";

import {IData, IOneMove, ITrailers} from "@/interfaces";

const token = process.env.NEXT_PUBLIC_API_URL
const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
}

const moviesService = {
    getAll: async (page: string): Promise<IData> => {
        try {
            const response = await fetch(`${baseURL}/${urls.movies}?page=${page}`, options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error);
            return Promise.reject(error);
        }
    },

    getById: async (id: string): Promise<IOneMove> => {
        try {
            const response = await fetch(`${baseURL}/${urls.movie(id)}`, options).then((res) => res.json());
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error);
            return Promise.reject(error);
        }
    },

    getTrailer: async (id: string): Promise<ITrailers> => {
        try {
            const response = await fetch(`${baseURL}/${urls.trailer(id)}`, options).then((res) => res.json());
            return await response.json();
        } catch (error) {
            console.error('Error fetching movies:', error);
            return Promise.reject(error);
        }
    },

}

export {moviesService}