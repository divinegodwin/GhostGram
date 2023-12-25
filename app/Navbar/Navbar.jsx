'use client'

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
        <h1>Threadle</h1>
      </div>

      <div className="h-[30px] w-[30px]" onClick={toggleNav}>
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          ></path>
        </svg>
      </div> 
    </div>
    
    {opened && (
    <div className=" nav w-[100%] bg-[#3f37c9] mt-[-0.75rem] text-white pb-4">
     
      <ul className="flex flex-col gap-4 mt-3 ml-[10rem]  ">
        <li>Home</li>
        <li>About</li>
        <li className="ml-[-1rem]">Contact me</li>
      </ul>
    </div>
)}

    </div>
  );
};
