'use client'
import Link from "next/link";
import React from "react";
import { useState } from "react";

export const Navbar = () => {

  const[opened, setOpened] = useState(false);

  const toggleNav = () =>{
    setOpened(!opened)
    console.log(opened)
  }

  return (

    <div>
        <div className="p-5 shadow-xl text-white flex flex-row gap-60 bg-[#3f37c9] h-[4rem] w-[100%]">
      <div className="ml-2">
        <h1 className="header">Thredle</h1>
      </div>

      <div className="nav-icon h-[30px] w-[30px]" onClick={toggleNav}>
        <svg
        className="nav-icon-icon"
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          ></path>
        </svg>
      </div> 
    </div>
    
    {opened && (
    <div className=" nav w-[100%] bg-[#3f37c9] mt-[-0.75rem] text-white pb-4">
     
      <ul className=" nav-ul flex flex-col gap-4 mt-3 ml-[10rem]">
        
        <Link href="/Posts">
        <li>Home</li>
        </Link>

<Link href ="/About">
        <li>About</li>
        </Link>
        
<Link href="/Contact">
        <li className="ml-[-1rem]">Contact me</li>
      </Link>

      </ul>
    </div>
)}

<div className="desktop-nav-container">
<ul className=" navs hidden ">
        
        <Link href="/">
        <li className="nav-items">Home</li>
        </Link>

<Link href ="/About">
        <li className="nav-items">About</li>
        </Link>
        
<Link href="/Contact">
        <li className=" nav-items ml-[-1rem]">Contact me</li>
      </Link>

      </ul>
</div>

    </div>
  );
};
