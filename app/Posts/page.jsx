"use client";
import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { Navbar } from "../Navbar/Navbar";
import CommentBody from "../CommentBody";

const Post = () => {
  //comfiguring time
  const [time, setTime] = useState("");
  const date = new Date();

  function getTime() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let fullDate = date.toLocaleDateString();
    //setting time format
    const format = ["am", "pm"];
    let newTime; //creating a container to hold the Time and format
    if (hours >= 12) {
      //storing time and format im the container
      newTime = `${hours}:${minutes} ${format[1]} ${fullDate}`;
    } else {
      newTime = ` ${hours}:${minutes} ${format[0]}  ${fullDate}`;
    }
    setTime(newTime); // setting the time const varaible
    return newTime; //returning the time string
  }

  useEffect(() => {
    let timeString = getTime();
    setTime(timeString);
  },[]);

  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  //when the button is clicked if stores the user input into an array of post


  const postButton = () => {
    if (userInput != "") {
      setPosts((prevPost) => [userInput, ...prevPost]);
      getTime();
      let timeString = getTime();
      console.log(timeString + "at clicked button");
      setUserInput("");

      const sendToDataBase = async () => {
        //sending data to database
        try {
          const { data, error } = await supabase.from("Post").insert([
            {
              post: userInput,
              time: timeString,
            },
          ]);
          if (data) {
            console.log(data);
          }
          if (error) {
            console.log("an error occured while sending to database", error);
          }
        } catch (error) {
          console.log("an unexpected error occured");
        }
      };

      sendToDataBase(); //calling the function
    }
  };

  const fetchData = async () => {
    // fuction to fetch data from database
    try {
      const { data, error } = await supabase
        .from("Post")
        .select("id,post,time")
        .order("created_at", { ascending: false }); //fetching the data from new to old
      if (data) {
        setPosts(data.map((entry) => ({  id: entry.id, post: entry.post, time: entry.time }))); // setting and fetching from the columns by mapping through and assignning each column to its value
      }
      if (error) {
        console.log("error fetching data", error);
      }
    } catch (error) {
      console.log("an error occured while fetching data", error);
    }
  };
  fetchData(); // calling the fetch function

//setting comment visibility state when the comment icon is clicked
  //state for each comment to be visible to a particular post
  const [commentVisibility, setCommentVisiblity] = useState({})// takes an object to store the key for each post

  //togling visibility for each post comment

function commentClicked (postId){// post id a key to check the current clicked icon
    setCommentVisiblity((prevVisibility) =>({...prevVisibility, [postId]: !prevVisibility[postId],}))
}


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#f8f9fa] fixed top-12">
      <marquee className='marquee px-4 pt-4 text-black'>
      Hello and welcome to GhostGram, users are set anonymously by the
            system but can choose to be known.
          
            <strong>MORE FEATURES COMING SOON!</strong>
      </marquee>
      </div>
      <div>
        <div className=" mt-[2rem] ml-16">
          <textarea
            onChange={handleChange}
            value={userInput}
            className="post-input border-2 w-[250px] h-[80px] text-area"
          ></textarea>
        </div>

        <div>
          <button
            onClick={postButton}
            className="post-btn w-[90px] h-[40px] p-2 bg-[#adb5bd] ml-[14rem] rounded-2xl post-btn"
          >
            Post
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="post-div post mt-[2rem] bg-[#f8f9fa] h-auto p-3"
        >
          <div className="w-[60px] h-[60px] rounded-full bg-[#3f37c9] ml-4"></div>
          <div className="font-bold mt-[-2.9rem] ml-7 text-white text-[22px]">
            GH
          </div>

          <div className="menu-icon ml-[20rem] mt-[-2rem]">
            <svg
              className="w-[28px] h-[28px]"
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
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              ></path>
            </svg>
          </div>

          <div className="post-description ml-[4rem] mt-8">
            <p> {post.post}</p>
          </div>

          <div className="flex ml-[9rem] mt-12 text-[#3f37c9]">
            <p className="time text-[14px] px-4">{post.time} </p>
          </div>

          <div className=" post-icons w-[100%] flex h-[25px] flex-row mt-[2rem]  gap-x-[6rem] pl-[3rem]">
            <div className="w-[25px]">
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
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                ></path>
              </svg>
            </div>

            <div className="w-[25px]">
              <svg
              onClick={()=>commentClicked(post.id)}
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                ></path>
              </svg>
            </div>
            <div className="w-[25px] ">
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
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                ></path>
              </svg>
            </div>
          </div>
            {/* comment call */}

            {commentVisibility[post.id] &&(
                       <CommentBody post={post} />
   
            )}

        </div>
      ))}

      <div className="welcome-post mt-[2rem] bg-[#f8f9fa] h-auto p-3">
        <div className=" w-[60px] h-[60px] rounded-full bg-[#3f37c9] ml-4"></div>

        <div className="font-bold mt-[-2.9rem] ml-7 text-white text-[22px]">
          GH
        </div>

        <div className="delete-icon w-[28px] h-[28px] mx-[18rem] mt-[-2rem]">
          <svg
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </div>

        <div className="mt-[4rem] ml-12 ">
          <p className="example-text text-[18px] pb-8">
            Hello and welcome to GhostGram, users are set anonymously by the
            system but can choose to be known.
            <br />
            <strong>MORE FEATURES COMING SOON!</strong>
          </p>
        </div>
      

      </div>
    </div>
  );
};

export default Post;
