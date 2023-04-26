import axios from "axios";
import api from "./apiConfig.js"

// update does not work 
const url = "https://api-project-production-7355.up.railway.app/questions"

export const createTrivia = async (data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

// // get
// const getTrivia = async () => {
//     const response = await axios.get(
//       "https://api-project-production-7355.up.railway.app/questions"
//     );
//     return response.data
// };

// delete , update

export const deleteTriviaQuestion = async (triviaQues, index) => {
    try {
        axios.delete(`https://api-project-production-7355.up.railway.app/questions/${triviaQues[index]?._id}`)
    } catch (error) {
        throw error;
    }
}