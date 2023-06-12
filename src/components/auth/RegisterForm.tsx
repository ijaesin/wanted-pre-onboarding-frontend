import React, { useState, useCallback } from "react";
import AuthTemplate from "./AuthTemplate";
import { Link } from "react-router-dom";
import { signUp } from "../../api/auth/auth";
import Error from "./Error";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      signUp({ email, password, setError });
    },
    [email, password]
  );

  return (
    <AuthTemplate>
      {error !== "" && <Error error={error} />}
      <div className="mb-5 text-lg font-bold text-green-600">Register</div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          data-testid="email-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          data-testid="password-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
          value={password}
          onChange={onChangePassword}
        />
        <button
          type="submit"
          data-testid="signup-button"
          className="w-full text-lg font-bold text-gray-100 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
        >
          Register
        </button>
      </form>
      <nav className="float-right mt-4 font-bold text-green-600">
        <Link to="/signin">Go to Login</Link>
      </nav>
    </AuthTemplate>
  );
}
