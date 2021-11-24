import React from "react";
import "./Login.css";
// import { Link,useHistory} from "react router dom";
import { Link } from "react-router-dom";

function Login() {
    const login = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
          <div className="login__topic">
          <p>
            By signing-in you agree to Amazon's conditions to use & sale.Please
            see our privacy Notice,our Cookies Notice and our interest-Based ads
            Notice
          </p>
          </div>
          <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
