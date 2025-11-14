import { useEffect } from "react";

const RedirectToDashboard = () => {
  useEffect(() => {
    window.location.href = "https://your-dashboard.onrender.com";
  }, []);

  return null;
};

export default RedirectToDashboard;
