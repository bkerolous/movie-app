export interface movies {
    adult: boolean,
    id: number,
    media_type: string,
    original_language: string,
    title: string,
    vote_average: number,
    overview: string,
    poster_path: string,
    genre_ids: number[],
    genres?: { id: number; name: string }[];
}