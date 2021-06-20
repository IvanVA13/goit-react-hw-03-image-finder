import axios from 'axios';

const API_KEY = '21270249-2948d6894814039909ab6eb3b';
const perPage = 12;

const fetchImages = ({ searchReq, page }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${perPage}&q=${searchReq}`,
    )
    .then(res => res.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default fetchImages;
