import logo from "./logo.svg";
import "./App.css";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import isAccessTokenValid from "./services/valid_access_token";
import HomePage from "./Views/Home/home-page";
import { requestHelper } from "./helpers/requestHelper";
import { useEffect, useState } from 'react';

export default function App() {
  const cookies = new Cookies();
  const [state, setState] = useState(false);

  useEffect(() => {
    const access_token = cookies.get("access_token");
    if (!access_token) {
      window.location.href = "http://localhost:3011/";
    } else {
      isAccessTokenValid(access_token).then((response_data) => {
        if (response_data.response) {
          setState(true);
        }
      })

    }
  }, []);
  return (
    <div>
      {state ? <>
        <h1>Kullanıcı Bilgileri</h1>
        <HomePage />
      </> : ""}
    </div>
  );

}
