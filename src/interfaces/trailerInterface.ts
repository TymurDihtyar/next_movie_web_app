export interface ITrailers {
    id: number
    results: ITrailer[]
}

export interface ITrailer {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: true,
    published_at: string
    id: string
}