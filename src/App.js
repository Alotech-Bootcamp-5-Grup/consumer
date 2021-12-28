import "./App.css";
import Cookies from "universal-cookie/es6";
import isAccessTokenValid from "./services/valid_access_token";
import HomePage from "./Views/Home/home-page";
import { useEffect, useState } from 'react';

export default function App() {
  const cookies = new Cookies();
  const [state, setState] = useState(false);

  useEffect(() => {
    const access_token = cookies.get("access_token");
    if (!access_token) {
      window.location.href = "http://localhost:3011/?redirectURL=http://localhost:3000";
    } else {
      isAccessTokenValid(access_token).then((response_data) => {
        if (response_data.response) {
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
