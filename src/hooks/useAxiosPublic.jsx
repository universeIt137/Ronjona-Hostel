import axios from "axios";
// const backendURL = 'http://localhost:5000/api/v1';
const backendURL = 'https://ronjona-hostel-server.vercel.app/api/v1';
const axiosPublic = axios.create({
  baseURL: backendURL
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;