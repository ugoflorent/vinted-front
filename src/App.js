import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token-vinted") || null);
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token-vinted", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("token-vinted");
    }
  };

  return (
    <Router>
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
