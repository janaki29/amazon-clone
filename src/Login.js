import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
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
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton"> Sign In</button>
        </form>
        <pre>
          By signing-in you agree to <br />
          Amazon's Condition of Use & <br />
          Sales. Please see our Privacy
          <br />
          Notice, our Cookies Notice <br />
          and our Interest-Based Ads.
        </pre>
        <button className="login__registerButton">
          Creatte your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
