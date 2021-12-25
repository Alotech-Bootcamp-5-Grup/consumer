import axios from "axios";
import Cookies from "universal-cookie";

export default async function isAccessTokenValid(data) {
    const cookies = new Cookies();
    try {
        const res = await axios({
            method: "post",
            url: "http://localhost:3010/token?redirectURL=http://localhost:3011",
            data: data,
            headers: { 'Content-Type': 'application/json' },
        })
        cookies.set("access_token", res.data.Access_Token)
        return res.data;
    } catch (error) {
        console.error("error in isAccessTokenValid  " + error.response.data);
    }
}