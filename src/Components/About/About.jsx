import React, { Component } from "react";
import "../About/about.css";
function About() {
  return (
    <div>
      <section
        data-aos="fade-up"
        className="about relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 about1  darkm "
      >
        <p className=" font-bold text-textPrimary dark:text-dmTextPrimary text-4xl lg:text-5xl ml-4 darkm">
          About Us
        </p>

        <div className="custom mt-0 lg:grid lg:grid-cols-2 lg:gap-12  py-4 px-2 pl-2 ml-4 text-textPrimary dark:text-dmTextPrimary text-1xl ">
          <div className="lg:col-span-1 darkm rem   ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate quaerat impedit, sit alias cumque ea at reprehenderit
              dolore dolorem labore iusto! Nesciunt, a!
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsam nisi aperiam a inventore adipisci laborum ullam? Incidunt
              aliquid aperiam quam, itaque provident, ipsam sed atque delectus,
              voluptatem expedita cum modi quaerat?
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              facilis quidem nostrum, id animi laborum accusantium cupiditate
              fuga?
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolorum!
              <br></br>
              <br></br>
              Additionally, it can be stored and protected on blockchain
              technology. This momentum does not end here but is the beginning
              of the human race's technological rebirth...
            </p>
          </div>
          <div className="mt-8 lg:mt-0 text-center lg:col-span-1  repo">
            <a href="/user/0x62f00046a610851159DcC272B33D81E6D49107f2">
              <img
                className="object-cover pointer-events-none rounded-2xl border-4 border-white shadow imgheight resp"
                src="https://s32659.pcdn.co/wp-content/uploads/2021/09/top-nft-artists.jpg.optimal.jpg"
                alt="any"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
