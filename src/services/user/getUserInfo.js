import axios from "axios";
import { authHeader } from "../../helpers/auth-header";

// getUserInfo servisimiz axios kullanarak user manager servisine istek atarak 
// kullanıcı bilgilerini alıyor.
export default async function getUserInfo(userId) {
  try {
    const res = await axios({
      method: "get",
      url: `${process.env.REACT_APP_USER_INFO_URL}${userId}/?redirectURL=${window.location.href}`,
      headers: authHeader(),
    })
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
}
