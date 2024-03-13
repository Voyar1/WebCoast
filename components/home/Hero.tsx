import React from "react";

const Hero = () => {
  return (
    <section className="relative flex  h-[32rem] w-full items-center  bg-hero bg-cover bg-center p-12 after:absolute after:bottom-[-9rem] after:left-0 after:z-10 after:h-52 after:w-full after:skew-y-[-3deg] after:bg-white">
      <div className="m-auto flex w-9/12 items-center justify-between">
        <div className="flex w-64 flex-col">
          <h1 className="h1-bold text-light-900">
            Design. Create. Create. Advertise. Develop.
          </h1>

          <p>
            Zbudujmy Twój wizerunek w sieci i zdobądźmy dla Ciebie nowych
            klientów!
          </p>
          <button>Sprawdź nasze realizacje</button>
        </div>
        <div>
          <p className="text-lg text-white">WEBCOAST.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
