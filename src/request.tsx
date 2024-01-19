const API_KEY = "9ec7d3f1e54a97886a16f2123c5b3fb4";
const request = {
    // fetchTrending: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`,
    fetchSimulcastsDubShows: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024&with_text_query=pokemon`,
    fetchRoundUpShows: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024&with_text_query=dragonball`,
    fetchSciFiShows:`discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024&with_text_query=space`,
    fetchJustAddWaterShows: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=sea`,
    fetchDemonShows: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`,
    fetchEerieShows: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=monster`,
    fetchPirateShows:`discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=pirate`,
    fetchKittenShows:`discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=cat`,
}
export default request;