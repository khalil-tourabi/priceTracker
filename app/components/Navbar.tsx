"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/img/price-tracker-high-resolution-logo-transparent.png";
import { useSession } from "next-auth/react";
import Logout from "../logout";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/">
          <Image src={logo} alt="Logo" width={90} height={36} />
        </Link>

        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 ml-auto">
            {session && (
              <li>
                <Link
                  href={"/dashboard"}
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mb-2 lg:mb-0"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                href={"/"}
                className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mb-2 lg:mb-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/pricing"}
                className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mb-2 lg:mb-0"
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="border-l border-[#333] h-6 lg:hidden my-4"></div>

          {session && <Logout />}
          {!session && (
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <Link
                href={"/login"}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] mb-2 lg:mb-0"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
