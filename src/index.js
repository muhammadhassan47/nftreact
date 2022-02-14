import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./Components/PrivacyPolicy/Privacy";
import Return from "./Components/Return policy/Return";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Card from "./Components/Explore/Card";
import Term from "./Components/Termandconditions/Term";

ReactDOM.render(
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/explore" element={<Card />}></Route>
        <Route exact path="/term" element={<Term />}></Route>
        <Route exact path="/return" element={<Return />}></Route>
      </Routes>
    </Router>
    {/* <App /> */}
  </>,
  document.getElementById("root")
);

reportWebVitals();
