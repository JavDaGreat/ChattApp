import React from 'react'
import { auth } from '../firebaseConfig'

function Massage({message}) {
  const messageClass=message.uid === auth.currentUser.uid
  ? `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`:
  `bg-[#e5e5ea] text-black float-left rounded-br-full`


  return (
    <div className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}>
      <p className='absolute mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
      <p>{message.text}</p>
      </div>
  )
}

export default Massage