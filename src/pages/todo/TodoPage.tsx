import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../lib/auth/getToken";

export default function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken("accessToken")) {
      navigate("/signin");
    }
  }, [navigate]);

  return <div>Todo Page</div>;
}
