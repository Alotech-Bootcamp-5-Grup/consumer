import axios from "axios";
import { authHeader } from "../../helpers/auth-header";
import { user_manager_url } from "../../helpers/requestUrl";

export default async function getUserInfo(userId) {
  try {
    const res = await axios({
      method: "get",
      url: user_manager_url + "user/" + userId + "?redirectURL=http://localhost:3000",
      headers: authHeader(),
    })
    return res.data;
  } catch (error) {
    console.error(error.response.data);
  }
}