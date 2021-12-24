import { requestUrl } from "./requestUrl";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
export async function requestHelper() {
    const cookies = new Cookies();
    let access_token = cookies.get('access_token');
    var isExpired = false;
    let decodedToken = jwt_decode(access_token);
    let currentDate = new Date();

    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        isExpired = true;
    }

    if (isExpired) {
        let refresh_token = cookies.get('refresh_token');
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token }),
        };
        let url = `${requestUrl}/api/auth/user/token`;
        const response = await fetch(url, requestOptions);
        const tokenServiceResponse = await response.json();
        if (!tokenServiceResponse.status) {
            /* error = tokenServiceResponse; */
        } else {
            cookies.set("user", JSON.stringify(tokenServiceResponse.data));
            cookies.set("access_token", JSON.stringify(tokenServiceResponse.data.access_token));
        }
    }
}
