import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/next.svg";
import "../../../public/js/script.js";
import Link from "next/link";
import Button from "../Button";

const index = () => {
  return (
    <header>
      <nav className="flex p-5 md:p-10 lg:p-20 justify-between lg:px-28 ">
        <div>
          <Image src={Logo} alt="logo" width={224} height={23} />
        </div>
        {/* <div> */}
        <ul className="hidden md:flex space-x-9 align-items-center  justify-center">
          <Link href="#" className="text-xl font-semibold">
            Home
          </Link>
          <Link href="#" className="text-xl font-semibold">
            Status
          </Link>
          <Link href="#" className="text-xl font-semibold">
            About
          </Link>
          <Link href="#" className="text-xl font-semibold">
            Services
          </Link>
          <Link href="#" className="text-xl font-semibold">
            Testimonials
          </Link>
          <Link href="#" className="text-xl font-semibold">
            Pricing
          </Link>
          <Button />
        </ul>
        <div className="absolute right-8 top-6">
          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default index;
