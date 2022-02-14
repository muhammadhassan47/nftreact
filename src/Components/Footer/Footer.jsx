import React from "react";
import "../Footer/footer.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/bgsdark.png";
function Footer() {
  return (
    <div>
      <div class="mt-20 bg-gray-50 dark:bg-darkBg2 border-t border-gray-100 dark:border-darkBg3 darkm">
        <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                class="h-10 w-auto"
                alt="BlackGalaxy IO"
                src={"https://solnftalliance.com/img/svg/nft.svg"}
              />
              <p class="mt-4 text-sm">
                The Galaxy's newest artistic NFT marketplace
              </p>
              <a
                class="mt-4 hover:underline text-sm text-textPrimary dark:text-dmTextPrimary darkm"
                href="mailto:hello@BlackGalaxy.io"
              >
                YOUR DOMAIN.IO
              </a>
            </div>

            <div class="grid grid-cols-3 lg:grid-cols-3 gap-10 borderr respond">
              {/*  */}
              <div class="text-sm re">
                <p class="mb-2 text-textPrimary dark:text-dmTextPrimary darkm">
                  Marketplace
                </p>
                <ul>
                  <li class="mt-2">
                    <NavLink
                      class="hover:underline"
                      to="/Explore"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore
                    </NavLink>
                  </li>
                  <li class="mt-2">
                    <a
                      class="hover:underline"
                      href="https://galaxyio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create NFT
                    </a>
                  </li>
                </ul>
              </div>
              <div class="text-sm re">
                <p class="mb-2 text-textPrimary dark:text-dmTextPrimary darkm">
                  Social link
                </p>
                <ul>
                  <li class="mt-2">
                    <a
                      class="hover:underline"
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      class="hover:underline"
                      href="https://tele"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Telegram
                    </a>
                  </li>
                  <li class="mt-2">
                    <a
                      class="hover:underline"
                      href="https://discod"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div class="text-sm re">
                <p class="mb-2 text-textPrimary dark:text-dmTextPrimary darkm">
                  Company
                </p>
                <ul>
                  <li class="mt-2">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      class="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About us
                    </Link>
                  </li>
                  <li class="mt-2">
                    <NavLink
                      class="hover:underline"
                      to="/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li class="mt-2">
                    <NavLink
                      class="hover:underline"
                      to="/term"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Term and Conditions
                    </NavLink>
                  </li>
                  <li class="mt-2">
                    <NavLink
                      class="hover:underline"
                      to="/return"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Return policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/*  */}
            </div>
          </div>
          <p class="text-center text-sm pt-16 pb-8 re">
            © 2021 Website io. All Rights Reserved.
          </p>
        </div>
        <div class="wid h-4 darkm"></div>
      </div>
    </div>
  );
}

export default Footer;
