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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Fill in all inputs')
      return
    }
    if (password.length <= 6) {
      setError('password should be more than 6 characters')
      return;
    }
    try {
      const { data, error } = await supabase.from('Account')
        .select('username, password')
        .eq('username', username)
      if ((data[0].password !== password) && (data.username !== username)) {
        setError('invalid username or password')
        return
      }

      if (error) {
        setError('error occured at login page', error)
        return
      } else if (data.username === 'Divine' || 'divine') {
        alert('welcome boss')
        router.push('/Posts')
      } else if (data.username === 'Divine' || 'divine') {
        setError('')
        setIsLoggedIn(true)//setting loged in state value to true once user account is found
        router.push('/Posts')// Navigate to home page if there is no error and user is found
      }
    } catch (error) {
      console.log('try error occured at login page', error)
      setError('user not found')
    }
  }
  if (isLoggedIn) {
    // User is logged in, don't render the Login component
    return null;//This means the Login component won't be rendered
  }

  return (
    <div className="grid place-items-center px-4 py-4 min-h-[100vh]">
      <form
        onSubmit={handleLogin}
        className="rounded-lg placeholder:w-[80%] w-full max-w-[500px] py-10 flex flex-col gap-6 shadow-lg px-4 sm:px-8"
      >
        <header className="grid place-items-center py-4">
          <h1 className="font-bold text-2xl">Sign In</h1>
        </header>
        {error && (
          <div><p className='text-[red] pl-9'>{error}</p></div>
        )}

        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[40px] border-4 p-6 rounded-lg outline-[#3f37c9]"
            type="text"
            placeholder="username"
            value={username}
          ></input>

          <fieldset>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[40px] border-4 p-6 rounded-lg outline-[#3f37c9]"
              type="password"
              placeholder="password > 6 chars"
              value={password}
            />
            <div className="flex justify-between pt-2">
              <div>&nbsp;</div>
              <p className="text-[#3f37c9] text-[15px]">Forgotten password ?</p>
            </div>
          </fieldset>

          <button type="submit" className="w-full p-2 h-[50px] text-white border-2 rounded-lg bg-[#3f37c9]">
            Submit
          </button>
        </div>

        <div className="grid place-items-center">
          <Link href='/Account'>
            <button className="focus:text-[red] text-[grey] text-lg">Create an Account</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
