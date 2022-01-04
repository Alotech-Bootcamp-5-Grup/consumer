import "./App.css";
import Cookies from "universal-cookie/es6";
import isAccessTokenValid from "./services/valid_access_token";
import HomePage from "./Views/Home/home-page";
import { useEffect, useState } from 'react';

export default function App() {

  const cookies = new Cookies();

  // buradaki state'i token'ın olup olmadığı ve geçerli olup olmadığı durumlarda kullanıyoruz.
  const [state, setState] = useState(false);

  useEffect(() => {
    // login ederken set ettğimiz access_token'ı burada alıyoruz
    const access_token = cookies.get("access_token");

    // eğer access_token yoksa o zaman bizi login ekranın redirect ediyor.
    if (!access_token) {
      window.location.href = `${process.env.REACT_APP_SSO_CLIENT_URL}?redirectURL=${window.location.href}`;
    } else {
      // eğer token varsa o zaman token'ın geçerliliğini kontrol ediyoruz.
      isAccessTokenValid(access_token).then((response_data) => {
        if (response_data.response) {
          // eğer geçerli ise token response true döner ve state'i true'ya eşitler bu sayade home page'imize girebiliriz.
          setState(true);
        }
      })

    }
  }, []);

  return (
    <div className="container">
      {state ? <>
        <HomePage />
      </> : ""}
    </div>
  );

}
