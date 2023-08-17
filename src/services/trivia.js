import axios from "axios";
import api from "./apiConfig.js";

const url =
  "https://raw.githubusercontent.com/sydney-rd/NASA-trivia/main/trivia.json";

// get
export const getTriviaQues = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
