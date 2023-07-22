import Chat from "./components/Chat"
import Navbar from "./components/Navbar"
import  {auth}  from "./firebaseConfig"
import {useAuthState} from "react-firebase-hooks/auth"

const style={
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative `
}

function App() {
  const [user]=useAuthState(auth)
  

  return (
    <div className={style.appContainer}>
      <section className= {style.sectionContainer}>
        <Navbar/>
{    user?     <Chat/> : 
      <h1 className="py-2 text-2xl px-2 text-center text-gray-600"> Welcome To my Chatt App please sign in to use the App</h1>
    
}

      </section>

    </div>
  )
}

export default App
