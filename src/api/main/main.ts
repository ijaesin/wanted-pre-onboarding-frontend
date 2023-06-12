import axios from "axios";

const API = axios.create({
  baseURL: " https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
