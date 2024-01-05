"use client";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="w-[100%] p-4 flex justify-center shadow-lg">
        <h1 className="font-bold">Contact Me </h1>
      </div>

      <form className="contact-container grid place-items-center px-4  mt-10 shadow-lg max-w-[90%] h-[450px] ml-4 pl-8 ">
        <div className="">
          <div className="flex flex-col mb-6">
            <label for="name" className="pl-1">
              Name
            </label>
            <input 
              type="email"
              className="contact-input  w-[260px] h-[60px] mt-2 border-4 rounded-lg p-4"
              onChange={handleName}
              placeholder="input your name"
            ></input>
          </div>

          <div className="flex flex-col  mb-6">
            <label for="email" className="pl-2">
              Email
            </label>
            <input
              type="text"
              className="contact-input w-[260px] h-[60px] mt-2 border-4 rounded-lg p-4"
              onChange={handleEmail}
              placeholder="input your email"
            ></input>
          </div>

          <div className="flex flex-col mb-6">
            <label for="email" className="pl-2">
              Message
            </label>
            <textarea
              onChange={handleMessage}
              cols={20}
              rows={6}
              placeholder="Enter max 20 characters"
              className="input w-[260px] h-[90px] mt-2 border-4 rounded-lg p-4"
            ></textarea>
          </div>
          <div className="ml-1">
            <button className="send-btn w-[260px] h-[55px] bg-[#3f37c9] text-white rounded-lg ">
              Send
            </button>
          </div>
        </div>
      </form>
<Footer />
    </>
  );
};

export default Contact;
