import axios from 'axios';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmZiN2Y5MThkYWI3NTQ1ODFlYzFlYjhhYmMzZGI5OSIsIm5iZiI6MTczMDEzMDc4MC4xOTg2NDcsInN1YiI6IjY3MWY4NGU1NWJlOWU4NzU5ZGE3YmU2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cN_ilSHhFTk0gMXNJ4RHmipLafW54eMyHZuMZemCh-w',
  },
  params: {
    include_adult: false,
    language: 'en-US',
  },
});

export const getTrendsMovies = async () => {
  const { data } = await moviesInstance.get('/trending/movie/week?language=en-US');
  return data;
};

export const getMovieById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}?language=en-US`);
  return data;
};

export const getCast = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/credits?language=en-US`);
  return data;
};

export const getReviews = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/reviews?language=en-US`);
  return data;
};

export const searchMovies = async query => {
  const { data } = await moviesInstance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data;
};
