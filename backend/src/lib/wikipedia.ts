import axios from 'axios';
import { convert } from 'html-to-text';

interface WikipediaResponse {
  query: {
    search: {
      snippet: string;
    }[];
  };
}

export const wikipedia = async (query: string) => {
  const endpoint = 'https://es.wikipedia.org/w/api.php';
  try {
    const response = await axios.get<WikipediaResponse>(endpoint, {
      params: {
        action: 'query',
        list: 'search',
        srsearch: query,
        format: 'json',
        origin: '*',
      },
    });

    const text = convert(response.data.query.search[1].snippet);

    return `Según internet, ${text}`;
  } catch (error) {
    console.error(error);
    return 'Según internet, no se encontró nada';
  }
};
