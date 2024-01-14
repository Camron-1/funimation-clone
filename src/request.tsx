const API_KEY = "9ec7d3f1e54a97886a16f2123c5b3fb4";
const request = {
    // fetchTrending: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`,
    fetchTrending: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=shonen`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres-28`, 
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY} &with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default request;