export async function getPopularMovies() {
    let movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key="+import.meta.env.VITE_TMDB_API_KEY)
    let results = await movies.json()
    return results.results

}

export async function searchMovies(query) {
    let movies = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+import.meta.env.VITE_TMDB_API_KEY+"&query="+query)
    let results = await movies.json()
    console.log(results.results)
    return results.results
}


