import { useEffect, useState } from "react";
import Cookies from "universal-cookie/es6";
import getUserInfo from "../../services/user/getUserInfo";

export default function HomePage() {
  const [userInfo, setUserInfo] = useState({});
  const cookies = new Cookies();
  useEffect(() => {
    getUserInfo(cookies.get('user_id')).then((data) => {
      setUserInfo(data.user);
    });
  }, []);

  return (
    <>
      <div className="card">
        <h1 className="card-title">Kullanıcı Bilgileri</h1>
        <div className="card-item">
          <span className="card-item-title">Username</span> {userInfo.username}
        </div>
        <div className="card-item">
          <span className="card-item-title">Name</span> {userInfo.user_name}
        </div>
        <div className="card-item">
          <span className="card-item-title">Surname</span> {userInfo.user_surname}
        </div>
        <div className="card-item">
          <span className="card-item-title">E-mail</span> {userInfo.user_email}
        </div>
        <div className="card-item">
          <span className="card-item-title">User Type</span> {userInfo.user_type}
        </div>
      </div>
      <button className="clear-cookie" onClick={() => cookies.remove("access_token")}>set access token null</button>
    </>
  );
}
