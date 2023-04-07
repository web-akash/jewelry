import axios from "axios";

let Api = axios.create({
  baseURL: "https://jewelry-backend.vercel.app",
});

export default Api;
