import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  // redirect to home when index url
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
