import Cookies from 'js-cookie';
import API from './API';
import axios from "axios";

export const getCookie = () => {
  const cookie = Cookies.get('userId')
  console.log("handleSessions:6", cookie);
}

export const authenticateUser = () => {
    const cookie = Cookies.get('userId');
    console.log("handleSessions:10", cookie);
    return  API.authenticateUser();
  }
  
export const logOut = () => {
  // Cookies.remove()
  return axios.get('/api/user/logout')
}
