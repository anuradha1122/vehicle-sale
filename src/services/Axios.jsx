import axios from "axios";

const getBaseUrl = () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'production':
        url = 'https://www.vehicle.lms.lk/';
        break;
      case 'development':
      default:
        url = 'http://localhost/vahicale-sale-backend/';
    }
  
    return url;
  }

  let headers = {};
   if(localStorage.accessToken){
      headers.Authorization = `Bearer ${localStorage.accessToken}`;
   };

  const axiosInstance = axios.create({
    baseURL: getBaseUrl(),
    //timeout: 1000,
    headers,
    });

  export default axiosInstance;
