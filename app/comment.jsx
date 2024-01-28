import React from 'react'

const Comment = ({className, handleCommentChange, value, handleCommentButton}) => {
  return (
    <div className='flex flex-row gap-1'>
        <input
        type='text'
        className={className}
        onChange={handleCommentChange}
        value={value}
        >
        </input>
        
        <button 
        onClick={handleCommentButton}
        className='comment-btn bg-[#3f37c9] w-[90px] h-[40px] text-[#ffff] rounded-lg'>send</button>
    
    <div>

    </div>
    
    </div>
  )
}

export default Comment