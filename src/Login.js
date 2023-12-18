import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  console.log(email, password);
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            {" "}
            Sign In
          </button>
        </form>
        <pre>
          By signing-in you agree to <br />
          Amazon's Condition of Use & <br />
          Sales. Please see our Privacy
          <br />
          Notice, our Cookies Notice <br />
          and our Interest-Based Ads.
        </pre>
        <button className="login__registerButton" onClick={register}>
          Creatte your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
