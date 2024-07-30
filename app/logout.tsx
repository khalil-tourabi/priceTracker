"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <span
      className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
      onClick={() => {
        signOut();
      }}
    >
      logout
    </span>
  );
}
