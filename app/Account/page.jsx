"use client";
import React from "react";
import supabase from "../supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

const Account = () => {
  const router = useRouter(); //for routing

  const [processing, setProcessing] = useState(false)//checking if the data is being processed to the database
  //form input state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [birthdate, setBirthdate] = useState()
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  //setting up supabase

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    console.log("Form submitted");

    if (!username || !password || !gender) {
      //form validation
      setError("Fill in all inputs");
      return;
    }
    if (password.length <= 6) {
      setError("password should be more than 6 characters");
      return;
    }
    setProcessing(true)
    const { data } = await supabase
      .from("Account") //check if user exist
      .select("username")
      .eq("username", username);

    if (data.length > 0) {
      setError("user already exist");
      return
    }
    try {
      //if user does not exist yo perform this action for me
      const { data, error } = await supabase.from("Account").insert([
        {
          username: username,
          password: password,
          gender: gender,
        },
      ]);
      console.log(data);
    
      router.push("/Posts");
      

      if (error) {
        console.log("error occured sending account to database", error);
      }
    } catch (error) {
      console.log("an error occured", error);
    }finally{
      setProcessing(false)//regardless if there is error or not
    }
  };

  return (
    
    <div className= "grid place-items-center px-4 py-4 min-h-[100vh]">
      <form
        onSubmit={handleCreateAccount}
        className=" auth-form w-full max-w-[500px] py-10 h-[450px] gap-6 shadow-lg sm:px-8 "
      >
        <div className="account-heading  pl-[5.5rem]  font-bold text-lg">
          Create an Account
        </div>
        {/* rendering error state if there is any*/}
        {error && (
          <div>
            <p className="text-[red] pt-4 pl-9 ">{error}</p>
          </div>
        )}
        <div className=" inputs-account-container flex flex-col gap-6 pt-4 px-3">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[60px] p-2 border-2 rounded-lg outline-[#3f37c9]"
            type="text"
            placeholder="username"
            value={username}
          ></input>
    {processing && <Loader />}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[60px]  border-2 p-4 rounded-lg outline-[#3f37c9]"
            type="password"
            placeholder="password > 6 chars"
            value={password}
          ></input>



          {/*
    <input
     onChange={(e)=>setBirthdate(e.target.value)}
     type='date'
     value={birthdate}
    className='w-[220px] h-[40px] text-black p-6 rounded-lg'
>
       </input>
    */}

          <div className="radios flex flex-row gap-8 px-8">
            <div>
              <label className="ml-[2rem]">male</label>
              <input
                id="maleGender"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "male"}
                className="ml-3"
                value="male"
                type="radio"
              ></input>
            </div>

            <div>
              <label>Female</label>
              <input
                id="femaleGender"
                onChange={(e) => setGender(e.target.value)}
                value="female"
                className="ml-3"
                checked={gender === "female"}
                type="radio"
              ></input>
            </div>
          </div>

          <button
            type="submit"
            className=" w-full p-2 h-[60px] ml-0.5 border-2 text-white rounded-lg bg-[#3f37c9]"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default Account;
