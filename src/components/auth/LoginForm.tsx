import React, { useCallback, useState, useEffect } from "react";
import AuthTemplate from "./AuthTemplate";
import { Link } from "react-router-dom";
import { signIn } from "../../api/auth/auth";
import Error from "../common/Error";
import { useNavigate } from "react-router-dom";
import validate from "../../lib/validation/validation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signIn({ email, password, setError, navigate });
    },
    [email, password, navigate]
  );

  useEffect(() => {
    if (validate({ email, password })) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [email, password]);

  return (
    <AuthTemplate>
      {error !== "" && <Error error={error} />}
      <div className="mb-5 text-lg font-bold text-green-600">Login</div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email ('@' 를 포함해주세요.)"
          data-testid="email-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password (8자리 이상 입력해주세요.)"
          data-testid="password-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
          value={password}
          onChange={onChangePassword}
        />
        <button
          type="submit"
          data-testid="signin-button"
          className="w-full text-lg font-bold text-gray-100 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
          disabled={!isValidated}
        >
          Login
        </button>
      </form>
      <nav className="float-right mt-4 font-bold text-green-600">
        <Link to="/signup">Go to Register</Link>
      </nav>
    </AuthTemplate>
  );
}
