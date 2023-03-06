import { useCallback } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  // loginUser
  const loginUser = useCallback((token) => {
    Cookies.set("TOKEN", token);
  }, []);

  return { loginUser };
};

export default useAuth;
