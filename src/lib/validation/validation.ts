import { ValidateParams } from "../../types/validate";

const validate = ({ email, password }: ValidateParams) => {
  return email.includes("@") && password.length >= 8;
};

export default validate;
