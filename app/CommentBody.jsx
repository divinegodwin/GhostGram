import React, { useEffect, useState } from "react";
import Comment from "./comment";
import supabase from "./supabaseClient";
import Loader from "./Loader";

const CommentBody = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const [loadingComment, setLoadingComment] = useState(false);

  const handleCommentButton = async (e) => {
    e.preventDefault();
    setComments((prevComment) => [commentInput, ...prevComment]);
    setCommentInput("");
    if (!commentInput) {
      alert("not valid");
      return;
    }

    try{
    const { data: insertedComment, error: commentInsertError } = await supabase
      .from("Comment")
      .insert([
        {
          comment: commentInput,
          post_id: post.id,
        },
      ]);
    if (commentInsertError) {
      console.log("an error occured at insetting comment", error);
    }
    if (insertedComment) {
      console.log("inserted comment to database");
     
    }
}catch(error){
  console.log(error, 'error occured while inserting comment')
}finally{
 
}
}

  useEffect(() => {
    const fetch = async () => {
    try{
      const { data: fetchComment, error: fetchCommentError } = await supabase
        .from("Comment")
        .select("comment")
        .eq("post_id", post.id);
          setLoadingComment(true)

      if (fetchCommentError) {
        console.log(fetchCommentError, "cant get comment");
      }
      if (fetchComment) {
        setComments(
          fetchComment.map((entry) => ({
            id: entry.id,
            comment: entry.comment,
          }))
        );
      }
    }catch(error){
        console.log('an error occured while fetching comment' , error)
    }finally{
        setLoadingComment(false)
    }
    }
    fetch();
  }, []);

  return (
<div>
  <div>
    {loadingComment && <Loader />}
    </div>
    <div className="mt-14 flex flex-col gap-6 h-[200px] overflow-y-auto">
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="w-full flex flex-col p-2  bg-white mt-[0.1rem]"
          >
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <div className=" grid justify-center ">
        <Comment
          className="w-180px border-2 pl-4 h-auto rounded-lg comment-box"
          handleCommentChange={(e) => setCommentInput(e.target.value)}
          value={commentInput}
          handleCommentButton={handleCommentButton}
        />
      </div>
    </div>
    </div>
  );
};

export default CommentBody;
