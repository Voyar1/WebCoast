"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex-between fixed left-0 top-0 z-50 w-full items-center gap-5 bg-white p-6  shadow-lg sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="h1-bold font-sairaCondensed text-dark-100 ">WEBCOAST.</p>
      </Link>

      <div className="right-0 top-0 flex items-center  gap-4 font-[100] max-lg:hidden">
        <Link href="/" className="flex items-center gap-1">
          Oferta
        </Link>
        <Link href="/" className="flex items-center gap-1">
          Proces
        </Link>
        <Link href="/" className="flex items-center gap-1">
          Case studies
        </Link>
        <Link href="/" className="flex items-center gap-1">
          Blog
        </Link>
        <Link href="/" className="flex items-center gap-1">
          O nas
        </Link>

        <Button text="Napisz do nas" />
      </div>
      <Image
        src="/assets/icons/hamburger.svg"
        width={32}
        height={32}
        alt="hamburger"
        className="cursor-pointer invert lg:hidden"
        onClick={handleToggleMenu}
      />
      <div
        className={`absolute right-0 top-0 flex h-screen w-full  flex-col items-center justify-between bg-white p-10 shadow-lg transition ease-in-out sm:w-8/12 lg:hidden  ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <Image
          src="/assets/icons/close.svg"
          width={32}
          height={32}
          alt="hamburger"
          className="absolute right-6 top-7 cursor-pointer sm:right-12"
          onClick={handleToggleMenu}
        />
        <div className="mt-14 flex flex-col gap-3 text-xl ">
          <Link href="/" className="flex items-center gap-1">
            Oferta
          </Link>
          <Link href="/" className="flex items-center gap-1">
            Proces
          </Link>
          <Link href="/" className="flex items-center gap-1">
            Case studies
          </Link>
          <Link href="/" className="flex items-center gap-1">
            Blog
          </Link>
          <Link href="/" className="flex items-center gap-1">
            O nas
          </Link>
        </div>
        <Button text="Napisz do nas" className="w-8/12" />
      </div>
    </nav>
  );
};

export default Navbar;
