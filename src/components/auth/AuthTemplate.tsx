import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../lib/auth/getToken";

interface AuthTemplateProps {
  children: React.ReactNode;
}

export default function AuthTemplate({ children }: AuthTemplateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken("accessToken")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <div className="w-[500px] bg-gray-100 rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.2)] py-12 px-10">
      <div className="mb-8 text-3xl font-bold text-center text-green-600">
        Wanted Pre-Onboarding
      </div>
      {children}
    </div>
  );
}
