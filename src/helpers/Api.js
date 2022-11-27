import axios from 'axios';

const API_KEY = 'c40ae92f6b073ed52dd8d039ab6b6211';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const res = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return res.data;
};

export const fetchMovieById = async movieId => {
  const res = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return res.data;
};

export const fetchMovieByName = async movieName => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${movieName}&language=en-US&page=1&include_adult=false`
  );
  return res.data;
};

export const fetchMovieCast = async movieId => {
  const res = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchMovieReviews = async movieId => {
  const res = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
};
