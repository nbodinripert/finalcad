import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../api/api";
import "./LoginPage.css";

const LoginPage = () => {
  //#region [router]
  const navigate = useNavigate();
  //#endregion

  //#region [states]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //#endregion

  //#region [effects]
  useEffect(() => {
    localStorage.removeItem("finalcad.token");
  }, []);
  //#endregion

  //#region [methods]
  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const loginData = await login(email, password);
      const { token } = loginData[0];
      localStorage.setItem("finalcad.token", token);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("" + error);
    }
  };
  //#endregion

  //#region [render]
  return (
    <div className="login-page">
      <div className="login-page-welcome">
        <h1>Welcome to Finalcad</h1>
        <p>Sign up or Sign in to start collaborating with your team</p>
      </div>
      <form className="login-page-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="name@company-name.com"
            id="login-page-email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          id="login-page-password"
          autoComplete="current-password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button type="submit" disabled={!email || !password}>
          Log in
        </button>
      </form>
      <p className="login-page-access">
        <span>Looking For Finalcad Classic or Finalcad Live access?</span>
        <a href="https://www.finalcad.com/fr/">Click here</a>
      </p>
    </div>
  );
  //#endregion
};

export default LoginPage;
