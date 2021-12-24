import { useEffect, useState } from "react";
import getUserInfo from "../../services/user/getUserInfo";

export default function HomePage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo("1").then((userInfo) => {
      setUserInfo(userInfo);
    });
  }, []);
  console.log(userInfo);
  return (
      <div style={{margin: 10}}>
        <div>user_name; {userInfo.user_name}</div>
        <div>user_surname; {userInfo.user_surname}</div>
        <div>user_type; {userInfo.user_type}</div>
        <div>user_email; {userInfo.user_email}</div>
        <div>user_password; {userInfo.user_password}</div>
              </div>
  );
}
