import axios from "axios";
import api from "./apiConfig.js";

const url = "https://api-project-production-7355.up.railway.app/questions";

// create
export const createTrivia = async (data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get
export const getTriviaQues = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update is not included in Trivia.jsx need to add it still
export const updateTriviaQuestion = async (id, data) => {
  try {
    const response = await api.put(url + id, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// delete
export const deleteTriviaQuestion = async (id) => {
  try {
    await axios.delete(
      `https://api-project-production-7355.up.railway.app/questions/${id}`
    );
  } catch (error) {
    throw error;
  }
};
