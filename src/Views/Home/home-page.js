import { useEffect, useState } from "react";
import Cookies from "universal-cookie/es6";
import getUserInfo from "../../services/user/getUserInfo";

export default function HomePage() {
  const [userInfo, setUserInfo] = useState({});
  const cookies = new Cookies();
  useEffect(() => {
    getUserInfo(cookies.get('user_id')).then((data) => {
      setUserInfo(data.userInfo);
    });
  }, []);

  return (
    <div style={{ margin: 10 }}>
      <div>user_name; {userInfo.user_name}</div>
      <div>user_surname; {userInfo.user_surname}</div>
      <div>user_type; {userInfo.user_type}</div>
      <div>user_email; {userInfo.user_email}</div>
      <div>user_password; {userInfo.user_password}</div>
      <button onClick={() => cookies.remove("access_token")}>set access token null</button>
    </div>
  );
}
