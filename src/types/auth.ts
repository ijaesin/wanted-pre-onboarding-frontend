export interface AuthParams {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
