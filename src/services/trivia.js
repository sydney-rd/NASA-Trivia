import axios from "axios"

const url = "https://api-project-production-7355.up.railway.app/questions"
export const createTrivia = async (data) => {
    try {
        const response = await axios.post(url, data)
        return response.data;
    } catch(error) {
        throw error
    }
}

// get
const getTrivia = async () => {
    const response = await axios.get(
      "https://api-project-production-7355.up.railway.app/questions"
    );
    return response.data
};

// delete , update