"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/img/price-tracker-high-resolution-logo-transparent.png";
import { useSession } from "next-auth/react";
import Logout from "../logout";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/">
          <Image src={logo} alt="Logo" width={90} height={36} />
        </Link>

        <div className="flex max-lg:ml-auto space-x-3">
          <ul className="lg:flex lg:items-center max-lg:block lg:space-x-8 ml-auto">
            {session && (
              <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                <Link
                  href={"/dashboard"}
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-5"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
              <Link
                href={"/"}
                className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-5"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
              <Link
                href={"/pricing"}
                className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-5"
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="border-l border-[#333] h-6 max-lg:hidden mt-2 pr-5"></div>

          {session && <Logout />}
          {!session && (
            <>
              <Link
                href={"/login"}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
              >
                Sign up
              </Link>
            </>
          )}

          <button id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
