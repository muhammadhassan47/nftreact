import React, { useState } from "react";

import Header from "./Components/header/Header";
import Main from "./Components/header/main/Main";
import About from "./Components/About/About";
import Featured from "./Components/Featured/Featured";
import Event from "../src/Components/Events/Event";
import Footer from "./Components/Footer/Footer";

// import "../header/main/main.css";

function App() {
  return (
    // <div>

    <>
      <Header />
      <Main />
      <About />
      <Featured />
      <Event />
      <Footer />
    </>
  );
}

export default App;
