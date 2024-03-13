import Link from "next/link";
import React from "react";
import Button from "../Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-between fixed left-0 top-0 z-50 w-full gap-5 bg-white p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="h1-bold font-sairaCondensed text-dark-100 ">WEBCOAST.</p>
      </Link>

      <div className="right-0 top-0 flex  items-end  gap-4  font-[100] max-lg:hidden">
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
      />
    </nav>
  );
};

export default Navbar;
