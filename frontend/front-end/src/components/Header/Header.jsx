import React from 'react'

const Header = () => {
  return (
    <div class="h-screen m-auto w bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
        <div class=" absolute flex flex-col items-start left-12 top-40 gap-4 w-3/6 text-white" >
            <h2 class="font-medium text-5xl">Order your favourite food here</h2>
            <p class="text-white text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum! Assumenda est dolorem asperiores, ut alias blanditiis, rem esse ducimus odio odit beatae iure reprehenderit!</p>
            <button class="border-none text-slate-400 bg-white font-medium text-base py-2 px-5 rounded-full">View Menu</button>
        </div>
    </div>
  )
}

export default Header