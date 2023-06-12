import { AxiosError } from "axios";
import API from "../main";
import { AuthParams } from "../../types/auth";
import setToken from "../../lib/auth/setToken";

export const signUp = async ({
  email,
  password,
  setError,
  navigate,
}: AuthParams) => {
  try {
    const response = await API.post("/auth/signup", {
      email,
      password,
    });

    alert(`해당 이메일(${email})로 가입이 완료되었습니다.`);

    response.status === 201 && navigate("/signin");
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      setError(message);
      return message;
    }
  }
};

export const signIn = async ({
  email,
  password,
  setError,
  navigate,
}: AuthParams) => {
  try {
    const response = await API.post("/auth/signin", {
      email,
      password,
    });

    setToken({ key: "accessToken", value: response.data.access_token });

    response.status === 200 && navigate("/todo");
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      setError(message);
    }
  }
};
