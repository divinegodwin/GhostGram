"use client"

import React, { useState } from 'react'

const Post = () => {


  const [posts, setPosts] = useState([])
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  //when the button is clicked if stores the user input imto an array of post

  const postButton = () => {
    setPosts((prevPost) => [...prevPost, userInput])
    console.log(posts)
  }

  return (
    <div>

      <div>
        <div className="mt-[2rem] ml-16">
          <textarea
            value={userInput}
            onChange={handleChange}
            className='border-2 w-[250px] h-[80px]'
          >
          </textarea>
          </div>

          <div>
            <button
              onClick={postButton}
              className="w-[90px] h-[40px] p-2 bg-[#adb5bd] ml-[14rem] rounded-2xl"

            >
              Post
            </button>
          </div>

        
</div>


        

{posts.map((post, key)=>(
  <div key={key}
  className='mt-6 bg-[#f8f9fa] w-[100%] h-[12rem] shadow-sm p-3'
  > 
<div className='ml-4'>
  <p> {post}</p>
  </div>
    </div>
))}

        

      <div className='mt-[6rem] bg-[#f8f9fa] h-[14rem] p-3'>

        <div className=' w-[60px] h-[60px] rounded-full bg-[#3f37c9] ml-4'>
        </div>

        <div className='font-bold mt-[-2.8rem] ml-8 text-white text-[22px]'>
          TD
        </div>

        <div className='w-[28px] h-[28px] ml-[20rem] mt-[-2rem]'>
          <svg data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
          </svg>
        </div>


        <div className='mt-[4rem] ml-4'>
          <p className='text-[18px]'>Hello @User and welcome to Threadle</p>
        </div>

        <div className='flex ml-[16rem] mt-12 text-[#adb5bd]'>
          <p className='text-[1.1rem]'>08:40pm</p>
        </div>
      </div>


    </div>
  )
}

export default Post;