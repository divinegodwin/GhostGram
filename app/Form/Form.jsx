"use client" 

import React, { useState } from "react";

export const Form = () => {

const [userInputedText, setUserInputedText]= useState("")
  const handleChange = (event)=>{
  setUserInputedText(event.target.value);
  }

  return (
    <div>

<div className=" h-90 w-[80%]  mt-12 ml-8 border-[#000]">
        <textarea
        col="12"
        rows="8"
        value = {userInputedText}
        onChange={handleChange}
        type="text"
        placeholder="write a threadle..."
        className=" p-6 pl-6 bg-[#f8f9fa] rounded-lg ml-[3rem] w-[220px] h-[80px] outline-none text-[#000]">

        </textarea>
        
        </div>

        <div className="mt-4 ml-[12.9rem]">
  <button className="w-[90px] rounded-xl h-[40px] bg-[#adb5bd] text-[#212529]">
    post
  </button>
  </div>

      </div>
    
   

  );
};
