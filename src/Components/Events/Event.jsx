import React from "react";
import "../Events/event.css";
function Event() {
  return (
    <div>
      <section
        id="events"
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 i-features bcolor "
        data-aos="zoom-in"
      >
        <p className="text-bluePrimary dark:text-dmBluePrimary font-bold"></p>
        <p className="font-bold text-textPrimary dark:text-dmTextPrimary text-4xl lg:text-5xl darkm">
          Events
        </p>
        <div className="grid grid-cols-1 mt-6 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          <div className="flex flex-col bg-white dark:bg-darkBg2 border border-white dark:border-darkBg3 mt-6 shadow rounded-xl overflow-hidden">
            <a href="/cryptonate" target="_blank" rel="noreferrer">
              <img
                className="h-40 w-full object-cover"
                src="https://cdn.pentas.io/next-s3-uploads/f6a6274d-66c5-4602-8062-464ceb21e4a6/photo1642687488.jpeg"
                alt="CRYPTONATE - ‘arts for ART’ Campaign"
              />
            </a>
            <div className="flex-1 px-4 py-4 darkm">
              <p className="text-2xl text-textPrimary dark:text-dmTextPrimary font-bold darkm">
                CRYPTONATE - ‘arts for ART’ Campaign
              </p>
              <p className="mt-4 line-clamp-5 ">
                Cryptonate is the world’s first NFT fundraising project for ART
                (Assisted Reproductive Technology) in collaboration with
                Pentas.io. It aims to raise funds to support medical procedures
                such as IVF, ICSI etc. for poor and needy infertile couples via
                Tunku Azizah Fertility Foundation (TAFF). The foundation was
                founded by Her Majesty Seri Paduka Baginda The Raja Permaisuri
                Agong, Tunku Hajah Azizah Aminah Maimunah Iskandariah, following
                her own experience with IVF treatment.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-darkBg3 px-4 py-4 text-center darkm">
              <a
                className="hover:underline"
                href="/cryptonate"
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-darkBg2 border border-white dark:border-darkBg3 mt-6 shadow rounded-xl overflow-hidden">
            <a href="/volkswagen" target="_blank" rel="noreferrer">
              <img
                className="h-40 w-full object-cover"
                src="https://cdn.pentas.io/next-s3-uploads/113785fd-4648-4463-ad66-111e481d7e52/VW-ARTEON_NFT_3-copy.jpg"
                alt="The Arteon Collection"
              />
            </a>
            <div className="flex-1 px-4 py-4 darkm">
              <p className="text-2xl text-textPrimary dark:text-dmTextPrimary font-bold darkm">
                The Arteon Collection
              </p>
              <p className="mt-4 line-clamp-5">
                For I dipped into the future, far as human eye could see, Saw
                the Vision of the world, and all the wonder that would be. -
                Alfred Lord Tennyson. Volkswagen is pleased to present
                Accelerated Futurescapes, a groundbreaking exhi bition of NFT
                art presented in a virtual gallery, curated by Filamen in
                collaboration with No-to-scale*.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-darkBg3 px-4 py-4 text-center darkm">
              <a
                className="hover:underline"
                href="/volkswagen"
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-darkBg2 border border-white dark:border-darkBg3 mt-6 shadow rounded-xl overflow-hidden">
            <a href="/selangorfc" target="_blank" rel="noreferrer">
              <img
                className="h-40 w-full object-cover"
                src="https://cdn.pentas.io/next-s3-uploads/65301d9c-73bf-49e9-a42c-f3aad65abe3b/5.png"
                alt="Red Giants Non-Fungible Collections"
              />
            </a>
            <div className="flex-1 px-4 py-4 darkm">
              <p className="text-2xl text-textPrimary dark:text-dmTextPrimary font-bold darkm">
                Red Giants Non-Fungible Collections
              </p>
              <p className="mt-4 line-clamp-5">
                In line with the digitalization era, we believe this initiative
                will connect the supporters and the club even further. This is
                part of the club’s mission, which is to continuously provide
                more value and bring interesting experience to our 12th player.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-darkBg3 px-4 py-4 text-center darkm">
              <a
                className="hover:underline"
                href="/selangorfc"
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-darkBg2 border border-white dark:border-darkBg3 mt-6 shadow rounded-xl overflow-hidden">
            <a href="/harisarong21" target="_blank" rel="noreferrer">
              <img
                className="h-40 w-full object-cover"
                src="https://cdn.pentas.io/next-s3-uploads/ac454406-2ce1-4c8f-8308-821c0b3a71eb/Poster_IG-Twitter_1.png"
                alt="Hari Sarong 21"
              />
            </a>
            <div className="flex-1 px-4 py-4 darkm">
              <p className="text-2xl text-textPrimary dark:text-dmTextPrimary font-bold darkm">
                Hari Sarong 21
              </p>
              <p className="mt-4 line-clamp-5 darkm">
                Celebrating the big debut of our talents in the NFT world; we
                are presenting our very first #malaysiadaydrop in conjunction
                with #harisarong21, a collaboration of @pentas_io
                @SketchnationM1 @nfxt_io @locco_my and Rumah Tangsi! The event
                is also supported by MyCreative, PRISMA and Cendana.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-darkBg3 px-4 py-4 text-center darkm">
              <a
                className="hover:underline darkm"
                href="/harisarong21"
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
