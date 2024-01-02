'use client'
import React from 'react'
import supabase from '../supabaseClient'
import { useState } from 'react'
import {useRouter} from 'next/navigation'

const Account = () => {
  const router = useRouter() //for routing
//form input state
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')
  //setting up supabase

  const handleCreateAccount =async (e)=>{
    e.preventDefault()
    console.log('Form submitted');
    if(!username|| !password|| !birthdate|| !gender){//form validation
        setError('Fill in all inputs')
        return;
    }
    if(password.length <=6){
     setError('password should be more than 6 characters')
     return;
    }
    try{
    const {data, error} = await supabase.from('Account')
    .insert([
      {
        username:username,
        password:password,
        dob:birthdate,
        gender: gender
      }
    ])
    console.log(data)
    router.push('/Posts')

    if(error){
      console.log('error occured sending account to database', error)
    }
  
  }catch(error){
    console.log('an error occured', error)
  } 
  }

  return (
    <div>

      <form onSubmit={handleCreateAccount} className=' w-[80%] h-[480px] flex flex-col gap-6 ml-[2rem] mt-[8rem] shadow-lg'>

    <div className='ml-[5rem] pt-13 font-bold text-lg'>Create an Account</div>
    {/* rendering error state if there is any*/}
    {error && (
      <div><p className='text-[red] pl-9'>{error}</p></div>
    )}
    <div className='flex flex-col gap-6 ml-[3rem]'>
    <input
    onChange={(e)=>setUsername(e.target.value)}
    className='w-[220px] h-[40px] border-2 p-6 rounded-lg outline-[#3f37c9]'
    type='text'
    placeholder='username'
    value={username}
    >
  </input>

       <input
        onChange={(e)=>setPassword(e.target.value)}
 className='w-[220px] h-[40px] border-2 p-6 rounded-lg outline-[#3f37c9]'
 type='text'
 placeholder='password > 6 chars'
 value={password}
 ></input>
    
    <input
     onChange={(e)=>setBirthdate(e.target.value)}
     type='date'
     value={birthdate}
    className=' border-2 p-6 rounded-lg'
    >
       </input>

<div className='flex flex-row gap-8'>
<div>
      <label className='ml-[2rem]'>male</label>
      <input
      id ='maleGender'
       onChange={(e)=>setGender(e.target.value)} 
       checked ={gender === 'male'}
      className='ml-3'
      value='male'
      type='radio'>
    </input>
    </div>

<div>
    <label>Female</label>
  <input 
  id ='femaleGender'
   onChange={(e)=>setGender(e.target.value)}
  value='female'
  className='ml-3'
  checked ={gender === 'female'}
  type='radio'>
</input>
</div>
</div>

<button type='submit' className='w-[220px] p-2 h-[50px] border-2 rounded-lg border-[#3f37c9]'>CREATE ACCOUNT</button>

</div>  
  </form>

    </div>
  )
}

export default Account