import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  
  //IF USER IS ADMIN, VIEW CHILDREN COMPONENT
  useEffect(() => {
    const userRole = token ? jwtDecode(token).roleId : null;

    if (userRole !== 1) {
      navigate("/");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default AdminRoute;
