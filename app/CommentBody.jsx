import React, { useState } from "react";
import Comment from "./comment";
import supabase from "./supabaseClient";

const CommentBody = ({post}) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleCommentButton = async(e) => {
    e.preventDefault();
    setComments((prevComment) => [commentInput,  ...prevComment]);
    setCommentInput("");

    const{data:insertedComment, error:commentInserError} = await supabase.from('Comment')
    .insert([{
      comment: commentInput,
      post_id: post.id
    }])
    console.log('postid ==', post.id)
    if(commentInserError){
      console.log('an error occured at insetting comment', error)
    }
    if(insertedComment){
     console.log('inserted comment to database')
    }

    const {data:fetchComment, error:fetchCommentError} = await supabase .from('comment')
    .select('comment')
    .eq('post_id', post.id)

    if(fetchCommentError){
      console.log(fetchCommentError, 'cant get comment')
    }
    if(fetchComment){
      setComments(fetchComment.map(entry=>entry))
    }

  };


  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
      <div>
        <Comment
          className="w-200px border-2 h-30px"
          handleCommentChange={(e) => setCommentInput(e.target.value)}
          value={commentInput}
          handleCommentButton={handleCommentButton}
        />
      </div>
    </div>
  );
};

export default CommentBody;
