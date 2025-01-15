import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

import { useState } from "react";

function Login() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(gmail);
  console.log(password);
  function loginRegister() {
    if (password.length < 8) {
      console.error("password length must atlist be above 8");
    } else if (gmail.length === "") {
    }
    const userStorage = {
      gmail: gmail,
      password: password,
    };
  }
  function loginHandeler() {
    loginRegister();
  }

  return (
    <div className="loginContainer">
      <div className="container">
        <h1>Dunkers Gram</h1>

        <div className="putLoginInfo">
          <input
            id="inputId"
            type="text"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="Phone number, username, or email"
          />
          <input
            id="inputPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button id="loginButton" onClick={loginHandeler}>
            Log in
          </button>
        </div>
        <div className="orWala">
          <div className="hr1"></div>
          <h3 className="myH3">or</h3>
          <div className="hr2"></div>
        </div>
        <div className="otherInformation">
          <a href="https://www.facebook.com/" id="facebookLogin">
            <FontAwesomeIcon icon={faFacebook} />
            Log in with facebook.
          </a>
        </div>
      </div>
      <div className="dontHaveAcc"></div>
    </div>
  );
}

export default Login;
