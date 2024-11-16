import axios from 'axios';

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

const options = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

async function fetchPixabayImages(q, page = 1) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q,
        page,
        ...options,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
  //   return axios
  //     .get(`https://pixabay.com/api/?q=${q}&${options}`)
  //     .then(response => {
  //       response.data;
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       throw new Error(error.response?.status || error.message);
  //     });
}

export const totalPages = data => {
  return Math.ceil(data.totalHits / options.per_page);
};

export default fetchPixabayImages;
