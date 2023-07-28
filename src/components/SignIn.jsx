import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebaseConfig'

function SignIn() {

  const googleSignIn =()=>{
    const provider =new GoogleAuthProvider()
    signInWithPopup (auth,provider)
  }
  return (
    <div className="flex justify-center" >
  <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn