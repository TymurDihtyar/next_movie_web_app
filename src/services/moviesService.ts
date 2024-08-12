import {baseURL, urls} from "@/constants";

import {IData, IOneMove, ITrailers} from "@/interfaces";

const token = process.env.NEXT_PUBLIC_API_URL

const moviesService = {
    getAll: (page: string): Promise<IData> => {
        const response = fetch(`${baseURL}/${urls.movies}?page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.then((res) => res.json());
    },

    getById: (id: string): Promise<IOneMove> => {
        const response = fetch(`${baseURL}/${urls.movie(id)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.then((res) => res.json());
    },

    getTrailer: (id: string): Promise<ITrailers> => {
        const response = fetch(`${baseURL}/${urls.trailer(id)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.then((res) => res.json());
    },

}

export {moviesService}