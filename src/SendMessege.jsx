import React, { useState } from 'react'
import { db,auth } from './firebaseConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


function SendMessege({scroll}) {
  const [input,setInput] = useState("")
  const handleSubmitt =async(e)=>{
    e.preventDefault()
    if(!input){
      alert("pls entre a messege")
      return
    }
    const {uid,displayName}=auth.currentUser
    await addDoc (collection(db,"masseges"),{
      text : input,
      name:displayName,
      uid,
      timestamp:serverTimestamp()
    })
    setInput("")
    scroll.current.scrollIntoViewer({behavior:"smooth"})
  }
  return (
    <form onSubmit={handleSubmitt} className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0">
      <input defaultValue={""} value={input} onChange={(e)=>setInput(e.target.value)} className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"type="text" placeholder='Write ....' />
      <button className='w-[20%] bg-green-500' type="submit">Send</button>
    </form>
  )
}

export default SendMessege