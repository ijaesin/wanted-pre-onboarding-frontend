interface setTokenProps {
  key: string;
  value: any;
}

const setToken = ({ key, value }: setTokenProps) => {
  if (!value) return;
  if (typeof value !== "string") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export default setToken;
