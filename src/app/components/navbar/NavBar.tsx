"use client";

import { useState } from "react";
import Link from "next/link";
import BaseButton from "../ui/BaseButton";
import LogOut from "../auth/LogOut";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <p>MyLogo</p>
      </div>

      <div className="relative">
        <BaseButton  onClick={() => setDropdownOpen(!dropdownOpen)}>MyProfile</BaseButton>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg z-20">
            <Link
              href="/user-profile"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Profile Page
            </Link>
            <LogOut/>
          </div>
        )}
      </div>
    </nav>
  );
}
