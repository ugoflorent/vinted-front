import logo from "../img/logo.png";

//import Cookies from "js-cookie";
import { Link } from "react-router-dom";

//const Header = ({ handleToken, token}) => {
//  return (
//    <header>

//    <div className="header">
//        <img src={logo} alt="logo" />
//        <input
//          className="header-input"
//          type="text"
//          placeholder="Rechercher des articles"
//        />
//        <div className="header-button">
//          <button>S'inscrire</button>
//          <button>Se connecter</button>
//       </div>
//        <button className="sale">Vends tes articles</button>
//      </div>
//    </header>
//  );
//};

const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {token ? (
        <button
          className="deconnection"
          onClick={() => {
            handleToken(null);
          }}
        >
          Se Déconnecter
        </button>
      ) : (
        <>
          <input
            className="header-input"
            type="text"
            placeholder="Rechercher des articles"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </>
      )}
      <Link to={token ? "/publish" : "/login"}>
        <button className="sale">Vends tes articles</button>
      </Link>
    </header>
  );
};

export default Header;
