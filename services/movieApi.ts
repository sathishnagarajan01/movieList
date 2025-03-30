export const FreeTestApi_Config = {
    baseUrl: process.env.EXPO_PUBLIC_MOVIE_TMDB_BASE_URL,
    method: 'get',
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json'
    }
}

export const fetchMovies = async ({query}: {query: string}) => {
    /*const endpoint = query
    ? `${process.env.EXPO_PUBLIC_MOVIE_TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${process.env.EXPO_PUBLIC_MOVIE_TMDB_BASE_URL}/discover/movie?sort_by=popularity.desc`*/

    const endpoint = query
    ? `${process.env.EXPO_PUBLIC_MOVIE_FAKEAPI_BASE_URL}?search=${encodeURIComponent(query)}`
    : `${process.env.EXPO_PUBLIC_MOVIE_FAKEAPI_BASE_URL}?sort=title&order=desc`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: FreeTestApi_Config.headers
    });
    if(!response.ok) {
        throw new Error('Failed to fetch movies', response.statusText);
    }
    
    const data =  await response.json();
    return data;
    // return data.results;
}

export const findMovieById = async (movieId: string): Promise<MovieFakeApi> => {
    try {
        const endpoint = `${process.env.EXPO_PUBLIC_MOVIE_FAKEAPI_BASE_URL}/${movieId}`
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: FreeTestApi_Config.headers 
        });
        if(!response.ok) {
            throw new Error(`Failed to fetch movie details of: ${movieId}}`);
        }
        const data =  await response.json();
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}