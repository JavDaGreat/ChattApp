import { useState,useRef,useEffect} from "react"
import React from 'react'
import Massage from "./Massage"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebaseConfig"
import SendMessege from "../SendMessege"

function Chat() {
  const [messages,setMesseges]=useState([])
  const scroll=useRef()
  useEffect(() => {
    const q = query(collection(db, 'masseges'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc);
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMesseges(messages);
    });
    return () => unsubscribe();
  }, []);
 
  return (
      <>
      <main className="flex flex-col p-[10px] ">
        {messages && messages.map((message)=>(
          <Massage key={message.id} message={message} />
        ))}
      </main>
      <SendMessege scroll={scroll} />
      <span ref={scroll}></span>
      </>
      
      
  )
}

export default Chat