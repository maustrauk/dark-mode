import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from './hooks/useDarkMode';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/">
        <Charts coinData={coinData} />
      </Route>
      <Route path="/about">
        <div>About page</div>
      </Route>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router>
  <App />
</Router>, rootElement);
