import React, { useEffect, useState } from "react";
import Comment from "./comment";
import supabase from "./supabaseClient";

const CommentBody = ({post}) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
   
  const handleCommentButton = async(e) => {
    e.preventDefault();
    setComments((prevComment) => [commentInput,  ...prevComment]);
    setCommentInput("");

    const{data:insertedComment, error:commentInsertError} = await supabase.from('Comment')
    .insert([{
      comment: commentInput,
      post_id: post.id
    }])
    console.log('postid ==', post.id)
    if(commentInsertError){
      console.log('an error occured at insetting comment', error)
    }
    if(insertedComment){
     console.log('inserted comment to database')
    }
  }
      
  useEffect(() => {
          const fetch = async() =>{


    const {data:fetchComment, error:fetchCommentError} = await supabase .from('Comment')
    .select('comment')
    .eq('post_id', post.id)

    if(fetchCommentError){
      console.log(fetchCommentError, 'cant get comment')
    }
    if(fetchComment){
      setComments(fetchComment.map((entry)=>({id:entry.id, comment:entry.comment})))
     
    }
  
  };
  fetch()
}, [post.id])
  

  return (


    <div>
    
    
    <div>  
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          </div>
      ))}
      </div>  

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
