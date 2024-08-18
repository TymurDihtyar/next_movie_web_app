const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const moviesByType = '/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const backdrop = 'https://image.tmdb.org/t/p/original';
const search = '/search/movie';

const urls = {
    movies,
    moviesByType,
    genre,
    poster: (key: string) => `${poster}/${key}`,
    backdrop: (key: string) => `${backdrop}${key}`,
    search,
    characters: (id: string) => `${moviesByType}/${id}/credits`,
    movie: (id: string) => `${moviesByType}/${id}`,
    trailer: (id: string) => `${moviesByType}/${id}/videos`
}

export {baseURL, urls}