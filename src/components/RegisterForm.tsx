import AuthTemplate from "./AuthTemplate";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <AuthTemplate>
      <div className="mb-5 text-lg font-bold text-green-600">Register</div>
      <form>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          className="w-full mb-5 text-lg bg-gray-100 border-b-2 outline-none"
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
