import React, { useState } from "react";
import Data from "./Data";
import "./card.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/header/Header";
import second from "../header/tail.css";

import "../header/header.css";

function Card() {
  return (
    <div>
      <Header />
      {/* id */}

      <h1 className="h111 darkm text-textPrimary dark:text-dmTextPrimary text-4xl lg:text-5xl font-bold h3 ml-4 px-2 pl-2 mx-4 center">
        Explore our MarketPlace
      </h1>
      <div className="ccontainerrr   ">
        {Data.map((val, id) => {
          return (
            <div className="pad ">
              <div data-aos="fade-up" className="ccard ccard:hover ">
                <div className="imgsss ">
                  <img src={val.img} alt="robo" />

                  <h1 className="name  ">{val.name}</h1>
                  <h3 className="email name ">{val.email}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      {/* idd */}
    </div>
  );
}

export default Card;
