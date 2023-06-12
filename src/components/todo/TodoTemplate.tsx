import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../lib/auth/getToken";
import Logo from "../common/Logo";

interface TodoTemplateProps {
  children: React.ReactNode;
}

export default function TodoTemplate({ children }: TodoTemplateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken("accessToken")) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="w-[500px] bg-gray-100 rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-12 px-10">
      <Logo />
      {children}
    </div>
  );
}
