import { AxiosError } from "axios";
import API from "../main";
import getToken from "../../lib/auth/getToken";

export const createTodo = async (
  todo: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  const token = getToken("accessToken");

  try {
    const response = await API.post(
      "/todos",
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      setError(message);
    }
  }
};

export const getTodos = async () => {
  const token = getToken("accessToken");

  try {
    const response = await API.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const token = getToken("accessToken");

  try {
    const response = await API.put(
      `/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      alert(message);
    }
  }
};

export const deleteTodo = async (id: number) => {
  const token = getToken("accessToken");

  try {
    const response = await API.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      alert(message);
    }
  }
};
