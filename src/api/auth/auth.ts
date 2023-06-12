import { AxiosError } from "axios";
import API from "../main/main";
import { AuthParams } from "../../types/auth";

export const signUp = async ({ email, password, setError }: AuthParams) => {
  try {
    const response = await API.post("/auth/signup", {
      email,
      password,
    });

    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      setError(message);
    }
  }
};

export const signIn = async ({ email, password, setError }: AuthParams) => {
  try {
    const response = await API.post("/auth/signin", {
      email,
      password,
    });

    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      setError(message);
    }
  }
};
