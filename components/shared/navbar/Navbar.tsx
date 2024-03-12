import Link from "next/link";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex-between container z-50 gap-5 p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="h1-bold font-sairaCondensed text-dark-100 max-sm:hidden">
          WEB <span className="text-primary-500">COAST.</span>
        </p>
      </Link>
      <div className="flex gap-4 font-[100]">
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
    </nav>
  );
};

export default Navbar;
