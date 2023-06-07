export default function LoginForm() {
  return (
    <div>
      <div className="text-green-600 font-bold text-lg mb-5">Login</div>
      <form>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          className="bg-gray-100 outline-none border-b-2 text-lg mb-5 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          className="bg-gray-100 outline-none border-b-2 text-lg mb-5 w-full"
        />
        <button
          type="submit"
          data-testid="signin-button"
          className="hover:bg-green-600 text-gray-100 bg-green-500 rounded-lg text-lg w-full font-bold cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
