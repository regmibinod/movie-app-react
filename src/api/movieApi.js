const ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const response = await fetch(`${API_URL}/movie/popular`, {
    methond: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDQyMzk3MGU2NDI3YzZkM2M1Y2JmNjdiYzY1ZjhkMyIsIm5iZiI6MTc0MzIzNDA5My45OTYsInN1YiI6IjY3ZTdhNDJkMGU4ZWU2NzgxNTY3YjBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GGtxTa7Jg3CWZu3oAy6sKywG2eCDUEiW3a1WensoTJM",
    },
  });
  const data = await response.json();
  return data.results;
}
