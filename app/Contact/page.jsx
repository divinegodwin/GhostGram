"use client";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";

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

      <form className="form flex flex-col mt-14 shadow-lg w-[90%] h-[450px] ml-[1rem] ">
        
        <div className="form-item-container">
        <div className="flex flex-col  ml-[3.3rem] mb-6">
          <label for="name" className="ml-[1rem]">
            Name
          </label>
          <input
            type="email"
            className="w-[250px] h-[40px] mt-2 border-2 rounded-lg p-4"
            onChange={handleName}
            placeholder="input your name"
          ></input>
        </div>

        <div className="flex flex-col  ml-[3.3rem] mb-6">
          <label for="email" className="ml-[1rem]">
            Email
          </label>
          <input
            type="text"
            className="w-[250px] h-[40px] mt-2 border-2 rounded-lg p-4"
            onChange={handleEmail}
            placeholder="input your email"
          ></input>
        </div>

        <div className="flex flex-col  ml-[3.3rem] mb-6">
          <label for="email" className="ml-[1rem]">
            Message
          </label>
          <textarea
          onChange={handleMessage}
            cols={20}
            rows={6}
            placeholder="Enter max 20 characters"
            className="w-[250px] h-[90px] mt-2 border-2 rounded-lg p-4"
          ></textarea>
        </div>

        <div>
          <button className="w-[200px] h-[45px] mt-4 bg-[#3f37c9] text-white rounded-lg ml-[5rem]">
            Send
          </button>
        </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
