import { useEffect } from "react";

const RedirectToDashboard = () => {
  useEffect(() => {
    window.location.href = "https://zerodha-a7b1.onrender.com";
  }, []);

  return null;
};

export default RedirectToDashboard;
