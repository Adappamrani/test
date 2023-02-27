import axios from "axios";

const API_URL = "http://localhost/api.php";

const getExams = async () => {
  try {
    const response = await axios.get(`${API_URL}/exams`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createExam = async (examData) => {
  try {
    const response = await axios.post(`${API_URL}/exams`, examData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getExams, createExam };
