"use client";
import React from "react";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
  
const Login = () => {
 
const router = useRouter()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('')//state for checking user logged in status

  const handleLogin = async(e) => {
    e.preventDefault();
   
    if(!username || !password){
        setError('Fill in all inputs')
        return
    }
    if(password.length <=6){
      setError('password should be more than 6 characters')
      return;
     }
try{
     const {data, error} = await supabase.from('Account')
     .select('username, password')
     .eq('username', username)
  if((data[0].password !== password) && (data.username !==username)){
      setError('invalid username or password')
      return
  }
     if(error){
      setError('error occured at login page', error)
      return
     }else{
      setError('')
      setIsLoggedIn(true)//setting loged in state value to true once user account is found
        router.push('/Posts')// Navigate to home page if there is no error and user is found
         }    
    }catch(error){
        console.log('try error occured at login page', error)
        setError('user not found')
      } 
    } 
  if (isLoggedIn) {
    // User is logged in, don't render the Login component
    return null;//This means the Login component won't be rendered
  }

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className=" auth-form rounded-lg placeholder:w-[80%] h-[460px] flex flex-col gap-6 ml-[2rem] mt-[8rem] shadow-lg"
      >
        <div className="login-heading ml-[7.6rem] pt-[2rem] font-bold text-2xl">Sign In</div>
        {error && (
  <div><p className='text-[red] pl-9'>{error}</p></div>
)}

        <div className="inputs-login-container flex flex-col gap-6 ml-[3rem] mt-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-[220px] h-[40px] border-4 p-6 rounded-lg outline-[#3f37c9]"
            type="text"
            placeholder="username"
            value={username}
          ></input>

          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[220px] h-[40px] border-4 p-6 rounded-lg outline-[#3f37c9]"
            type="password"
            placeholder="password > 6 chars"
            value={password}
          ></input>
                  <button type="submit" className="w-[220px] p-2 h-[50px] focus:bg-[#3f37c9] focus:text-white border-2 ml-1 rounded-lg border-[#3f37c9]">
          Submit
        </button>
        </div>


            
        <div className="mt-4">
          <Link href='/Account'>
          <button className="create-account pl-[6rem] focus:text-[red] text-[grey] text-lg">Create an account</button>
          </Link>
          </div>
      </form>
    </div>
  );
};

export default Login;
