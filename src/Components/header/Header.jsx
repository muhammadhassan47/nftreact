import second from "../header/tail.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import meta from "../../assets/imgs/metamask.svg";
import App from "../../App";
import AOS from "aos";
import "aos/dist/aos.css";

// import imgwhite from "../../assets/imgs/bgswhite.png";

import "../header/header.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

const Globalstyle = createGlobalStyle`
html,.sticky,.darkm{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#FFFF"};
    color: ${(props) => (props.theme.mode === "dark" ? "#FFFF" : "#111")};
}
`;

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [theme, useTheme] = useState({ mode: "light" });
  // const [logo, setLogo] = useState({ loogo: img });
  const [tog, setTog] = useState(false);
  const [toggle, setToggle] = useState(false);

  function Darkmode(e) {
    useTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });

    // logo ? setLogo(img) : setLogo(imgwhite);
    tog ? setTog(false) : setTog(true);
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    // <div>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      {/* <Logo /> */}
      <>
        <nav className="sticky top-0 z-50 bg-white dark:bg-darkBg2 shadow">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-darkBg3 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary"
                    id="headlessui-disclosure-button-1"
                    type="button"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className={
                        toggle
                          ? "lg:block h-6 lg:h-8 w-auto font-bold darkm logo "
                          : "lg:block h-6 lg:h-8 w-auto font-bold darkm logo hiddenc"
                      }
                      alt="BLACKGALAXY.IO"
                      src={"https://solnftalliance.com/img/svg/nft.svg"}
                    />
                  </Link>

                  <Link to="/">
                    <img
                      className={
                        toggle
                          ? "lg:block h-6 lg:h-8 w-auto font-bold darkm logo hiddenc"
                          : "lg:block h-6 lg:h-8 w-auto font-bold darkm logo "
                      }
                      alt="BLACKGALAXY.IO"
                      src={"https://solnftalliance.com/img/svg/nft.svg"}
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-2">
                  <NavLink
                    className="border-transparent hover:border-gray-300 dark:hover:border-dmTextSecondary inline-flex items-center px-1 pt-1 border-b-2 text-sm"
                    to="/Explore"
                  >
                    Marketplace
                  </NavLink>
                  <a
                    className="border-transparent hover:border-gray-300 dark:hover:border-dmTextSecondary inline-flex items-center px-1 pt-1 border-b-2 text-sm"
                    href="/feeds"
                  >
                    Feeds
                  </a>
                </div>
              </div>
              <div className="hidden md:flex md:flex-1 items-center mx-2">
                <div className="relative flex-1 mx-3">
                  <form autocomplete="off group relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-full ml-4 opacity-30 absolute text-textSecondary dark:text-dmTextSecondary"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      id="search black galaxy"
                      className="darkm pl-10 w-full text-textSecondary dark:text-dmTextSecondary bg-white dark:bg-darkBg1 text-sm focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary rounded-full border border-gray-300 dark:border-darkBg3 shadow-inner placeholder-textSecondary dark:placeholder-darkm"
                      placeholder="Search Nfts.."
                      maxlength="100"
                    />
                  </form>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={toggle ? "w-5 h-5 dark hiddenc" : "w-5 h-5 "}
                    role="button"
                    onClick={Darkmode}
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class={toggle ? "w-5 h-5 " : "w-5 h-5 hiddenc"}
                      role="button"
                      onClick={Darkmode}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-shrink-0 ">
                  <button
                    type="button"
                    className="darkm transition duration-100 ease-in-out relative inline-flex items-center px-4 py-2 shadow-sm border border-gray-300 dark:border-darkBg3 text-sm font-bold rounded-full text-textPrimary dark:text-dmTextPrimary bg-white dark:bg-darkBg1 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary"
                  >
                    <img
                      className="block h-6 w-auto mr-3"
                      src={meta}
                      alt="metamask"
                    />
                    <span>Connect wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div
            className={tog ? " shadow-inner wid darkm" : "shadow-inner wid "}
          >
            <div className="py-0.5 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-white text-sm "></p>
            </div>
          </div>
        </div>
        <div className=" header"></div>
      </>
    </ThemeProvider>

    // </div>
  );
}

export default Header;
