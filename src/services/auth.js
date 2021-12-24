import axios from "axios";
import { requestUrl } from "../../helpers/requestUrl";
import Cookies from 'universal-cookie';
import { authHeader } from "../helpers/auth-header";

export default async function authUser(data) {
  // await requestHelper();
  const cookies = new Cookies();
  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:3010/?redirectURL=http://localhost:3020",
      data: data,
      headers: authHeader(),
    })
    cookies.set('access_token', res.data);
    return res.data;
  } catch (error) {
    console.error("error in auth user  " + error.response.data);
  }
}