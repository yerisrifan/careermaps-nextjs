"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Post job", "Salaries", "Blog", "Employees", "About us"];

  return (
    <nav className="text-white px-4 sm:px-6 lg:px-8 py-4 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={40}
            className="w-auto h-8 sm:h-10"
          />
          <span className="text-2xl font-bold">careermaps</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          <ul className="flex space-x-4 lg:space-x-8 text-secondary text-sm">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition-all duration-300"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>Sign In</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Blur Effect */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsMenuOpen(false)}
          >
            x
          </div>
          <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter">
            <div className="p-6">
              <ul className="flex flex-col space-y-4 text-white text-sm">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-secondary transition-all duration-300"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 w-full bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
              >
                <span className="relative flex justify-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10">
                  <span>Sign In</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
