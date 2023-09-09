import jwtDecode from "jwt-decode";

const IsAuthenticated = () => {
  //GETS TOKEN AND DECODES IT
  const token = localStorage.getItem("jwtToken");
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } else {
    return null;
  }
};

export default IsAuthenticated;
