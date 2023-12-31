import React from 'react'
import { auth } from '../firebaseConfig'
import {useAuthState} from "react-firebase-hooks/auth"
import SignIn from './SignIn'
import LogOut from './LogOut'


const style={
  nav:`bg-gray-800 h-20 flex justify-between item-center p-4`,
  heading:`text-white text-3xl`
}

function Navbar() {
  const [user]=useAuthState(auth)
  console.log(user);


  return (
    <div className={style.nav}>
      <h1 className={style.heading}> Chatt App</h1>
      {user ? <LogOut /> : <SignIn />}
         
    </div>
  )
}

export default Navbar