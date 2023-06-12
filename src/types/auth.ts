import { NavigateFunction } from "react-router-dom";

export interface AuthParams {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
}
