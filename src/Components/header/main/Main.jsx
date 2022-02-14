import "../main/main.css";
import img from "../../../assets/imgs/ntf.jpg";
import { NavLink } from "react-router-dom";
// import meta from "../../../assets/imgs/metamask.svg";
import "../../header/header.css";

function Main() {
  return (
    <>
      <div className="containerr  ">
        <div className="left">
          <div className="h1 text-4xl lg:text-5xl font-bold h3 ml-4 px-2 pl-2">
            <h1>
              {" "}
              <span className="lineh">
                {" "}
                Explore Out of this universe NFTs
              </span>{" "}
              On the galaxy's newest artistic NFT marketplace.
            </h1>
          </div>
          <p class="text-text-current  text-1xl mt-2 mx-4 px-2 font-semibold">
            A comprehensive NFT marketplace that seeks to empower all over the
            world through digital content creation. Our foresight is to conserve
            precious content through blockchain technology for posterity.
          </p>
          <div className="flex-shrink-0  btne">
            <NavLink
              type="button"
              to="/Explore"
              className="darkm customm bg-white dark:bg-darkBg1 text-textPrimary dark:text-dmTextPrimary transition duration-100 ease-in-out h-12 mb-4 px-4 py-2 border border-gray-300 dark:border-darkBg3 shadow-sm text-sm font-bold rounded-full transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary"
            >
              <div className="inline-flex items-center h-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 cll"
                  aria-hidden="true"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Explore Marketplace
              </div>
            </NavLink>
            {/* id */}
            <a
              type="button"
              to="/Explore"
              className="mx-4 text-center darkm customm bg-white dark:bg-darkBg1 text-textPrimary dark:text-dmTextPrimary transition duration-100 ease-in-out h-12 mb-4 px-4 py-2 border border-gray-300 dark:border-darkBg3 shadow-sm text-sm font-bold rounded-full transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary"
            >
              <div className="inline-flex items-center h-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 cll"
                  aria-hidden="true"
                ></svg>
                Mint Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 cll"
                  aria-hidden="true"
                ></svg>
              </div>
            </a>

            {/* ss */}
          </div>
        </div>
        <div className="right ">
          <div className="cards darkm">
            <div className="cardbg  ">
              <div class="cards-item">
                <img
                  className="iimg"
                  src={
                    "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/17/145255.jpg"
                  }
                  alt="ntfs"
                  style={{ width: "100%" }}
                />
                <h1 className="darkm pt-4 h11 ">Giga Glitch Gargantuan 002</h1>
                <p class="name darkm">Owner name</p>
                <p className="des darkm">Prototype Character Creation 047</p>
                <p>
                  <button className="cbtn "> $0.02 BNB `~$7.18 </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
