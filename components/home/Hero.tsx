import React from "react";

const Hero = () => {
  return (
    <section className="relative z-10 mt-12  flex h-[32rem] w-full  items-center bg-hero bg-cover  bg-center after:absolute after:bottom-[-2rem] after:left-0 after:z-0 after:h-20 after:w-full after:skew-y-[-1.5deg] after:bg-white  xxl:h-[46rem]">
      <div className="container m-auto flex w-9/12 items-center justify-between max-lg:w-10/12 max-lg:p-1 2xl:max-w-[1000px] xxl:max-w-[1400px]">
        <div className="flex w-64 flex-col ">
          <h1 className="h1-bold text-5xl text-light-900  max-lg:text-5xl xxl:text-7xl">
            Design. Create. Advertise. Develop.
          </h1>
          <p className="mt-2 text-light-900 ">
            Zbudujmy Twój wizerunek w sieci i zdobądźmy dla Ciebie nowych
            klientów!
          </p>
          <button className="h3-semibold inline-block bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-left  text-transparent">
            Sprawdź nasze realizacje
          </button>
        </div>
        <div>
          <p className="h1-bold inline-block bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-8xl text-transparent max-xl:text-7xl max-lg:text-6xl max-md:hidden xxl:text-9xl">
            WEBCOAST.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
