import React, { useCallback, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthTemplate() {
  const [toggle, setToggle] = useState(true);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setToggle(!toggle);
    },
    [toggle]
  );

  return (
    <div className="w-[500px] bg-gray-100 rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-12 px-10">
      <div className="text-center text-green-600 font-bold text-3xl mb-8">
        Wanted Pre-Onboarding
      </div>
      {toggle ? <LoginForm /> : <RegisterForm />}
      <div>
        <button
          onClick={onClick}
          className="font-bold mt-3 text-green-600 float-right"
        >
          Go to {toggle ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
}
