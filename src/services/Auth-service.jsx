import axiosInstance from "./Axios";

const Register = async (email, nameWithInitias, birthDay, gender, contactNo, password) => {
  return axiosInstance.post("user/user_registration.php", {
    email,
    nameWithInitias,
    contactNo,
    password,
    birthDay,
    gender
  })
    .then((response) => {
      return response.data;
    });
};

const Login = async (userID, password) => {
  return axiosInstance.post("user/login.php", {
    userID,
    password,
  })
    .then((response) => {
      //console.log(JSON.stringify(response));
      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.userData));
      }
      return response.data;
    });
};

const Logout = () => {
  localStorage.clear();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  Register,
  Login,
  Logout,
  getCurrentUser,
}
export default AuthService;