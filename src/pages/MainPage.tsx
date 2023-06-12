import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";

export default function MainPage() {
  return (
    <div className="w-[500px] bg-gray-100 rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-12 px-10">
      <Logo />
      <Link
        to="/signin"
        className="block mb-4 text-2xl font-bold text-center text-green-500 hover:text-green-600"
      >
        로그인 페이지로 이동
      </Link>
      <Link
        to="/todo"
        className="block text-2xl font-bold text-center text-green-500 hover:text-green-600"
      >
        Todo List 페이지로 이동
      </Link>
    </div>
  );
}
