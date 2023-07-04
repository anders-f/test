import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";

const LoginCallbackPage = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoading && auth.isAuthenticated) {
      navigate("/");
    }
  });
  return <></>;
};

export default LoginCallbackPage;
