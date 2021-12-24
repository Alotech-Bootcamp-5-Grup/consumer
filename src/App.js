import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import isAccessTokenValid from "./helpers/check-acces-token";
import HomePage from "./Views/Home/home-page";
import { requestHelper } from "./helpers/requestHelper";

export default function App() {
  const cookies = new Cookies();
  const access_token = cookies.get("access_token");
  return (
        <div>
          <HomePage />
        </div>
      );
  // console.log("here access_token" + access_token);
  // if (access_token) {
  //   // await requestHelper();
  //   return (
  //     <div>
  //       <h1>Bookkeeper!</h1>
  //       <HomePage />
  //       {/* <nav
  //         style={{
  //           borderBottom: "solid 1px",
  //           paddingBottom: "1rem",
  //         }}
  //       >
  //         <Link to="/auth/login">login</Link> |{" "}
  //         <Link to="/auth/register">register</Link> 
  
  //       </nav> */}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <HomePage />
  //     </div>
  //   );
  // }

}
