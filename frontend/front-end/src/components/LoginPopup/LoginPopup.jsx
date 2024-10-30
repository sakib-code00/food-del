import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div class=" w-full h-full bg-slate-800 bg-opacity-80 grid absolute z-10">
        <form  class="place-self-center w-90 bg-white flex flex-col gap-6 py-6 px-8 rounded-2xl text-base">
            <div class="flex justify-between items-center">
                <h2>{currentState}</h2>
                <img class="cursor-pointer w-4" onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div class="flex flex-col gap-5">
                {currentState==="Login"?<></>:<input class="outline-none border border-solid border-gray-300 rounded-sm p-2" type="text" placeholder='Your name' required />}
                
                <input class="outline-none border border-solid border-gray-300 rounded-sm p-2" type="email" placeholder='Your email' required/>
                <input class="outline-none border border-solid border-gray-300 rounded-sm p-2" type="password" placeholder='Password' required />
            </div>
            
            <button class="p-2 rounded-sm bg-red-400 text-base cursor-pointer text-white">{currentState ==="Sign Up"?"Create account" :"Login"}</button>
            <div class="flex items-start gap-2">
                <input class="mt-1" type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new accont? <span class="cursor-pointer text-red-400 font-medium" onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span class="cursor-pointer text-red-400 font-medium" onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup