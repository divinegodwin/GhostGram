import React from 'react'

const Comment = ({className, handleCommentChange, value, handleCommentButton, post_id}) => {
  return (
    <div className='flex flex-row gap-6'>
        <input
        type='text'
        className={className}
        onChange={handleCommentChange}
        value={value}
        >
        </input>
        
        <button 
        onClick={handleCommentButton}
        className=' w-[69px] border-2 text-white bg-[#3f37c9] h-[30px]'>send</button>
    
    <div>

    </div>
    
    </div>
  )
}

export default Comment