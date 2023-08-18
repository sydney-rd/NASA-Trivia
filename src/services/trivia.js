import axios from "axios";

const url =
  "https://raw.githubusercontent.com/sydney-rd/NASA-trivia/main/src/trivia.json";

// get function
export const getTriviaQues = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
