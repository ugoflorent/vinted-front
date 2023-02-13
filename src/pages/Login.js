import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.prerventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleLogin}
      >
        <h1 style={{ textAlign: "center", margin: 20 }}>Se connecter</h1>
        <input
          style={{ border: "none", marginBottom: 10 }}
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          style={{ border: "none", marginBottom: 10 }}
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input className="connecter" type="submit" value="Se connecter" />
        <Link to="/signup" className="signup">
          Pas encore de compte , Inscris-toi
        </Link>
      </form>
    </div>
  );
};

export default Login;
