import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/repositories';

export const fetchRepos = async (page = 1) => {
  const today = new Date();
  const tenDaysAgo = new Date(today.setDate(today.getDate() - 10))
    .toISOString()
    .split('T')[0];

  try {
    const response = await axios.get(
      `${BASE_URL}?q=created:>${tenDaysAgo}&sort=stars&order=desc&page=${page}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
};
