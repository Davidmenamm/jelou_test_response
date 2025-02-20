import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const calculateSum = async (scores: string[]) => {
  try {
    // Convert strings to numbers
    const numericScores = scores.map((score) => Number(score));

    console.log('API base URL:', api.defaults.baseURL);
    console.log('Scores to send:', numericScores);
    const fullUrl = `${api.defaults.baseURL}/api/v1/calculate-scores`;
    console.log('Full request URL:', fullUrl);

    const payload = { scores: numericScores };
    console.log('Payload being sent:', payload);

    const response = await api.post('/api/v1/calculate-scores', payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API error:', {
        message: error.message,
        code: error.code,
        url: error.config?.url,
      });
    } else {
      console.error('Something else broke:', error);
    }
    throw error;
  }
};