import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-20 rounded-full'>
                <img src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.1618702768.1734432654&semt=ais_hybrid" alt="" />
            </div>
        </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is Up?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
    </div>
  )
}

export default Message
