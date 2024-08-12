const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const search = '/search/movie';
const characters = '/movie';

const urls = {
    movies,
    genre,
    poster: (key: string) => `${poster}${key}`,
    search,
    characters: (id: string) => `${characters}/${id}/credits`,
    movie: (id: string) => `${characters}/${id}`,
    trailer: (id: string) => `${characters}/${id}/videos`
}

export {baseURL, urls}