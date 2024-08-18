import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY = 'EfwjeGfaTlScrIVEMv9htUyiouwKxcUSMiShbwN3Y9w';

export const fetchRandomImages = async () => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        count: 4,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
