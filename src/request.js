const APIKEY = "7071b328bae467784112b002ae43b909";


const requests = {
    fetchTreding: `/trending/all/week?api_key=7071b328bae467784112b002ae43b909&language=en-US`,
    fetchNetFlixOriginals:`/discover/tv?api_key=7071b328bae467784112b002ae43b909&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=7071b328bae467784112b002ae43b909&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=7071b328bae467784112b002ae43b909&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=7071b328bae467784112b002ae43b909&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=7071b328bae467784112b002ae43b909&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=7071b328bae467784112b002ae43b909&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=7071b328bae467784112b002ae43b909&with_genres=99`
}

export default requests;