import {useState} from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

    const[menu, setMenu] = useState("Menu");


  return (
    <div class="py-20 px-0 flex justify-between items-center">
        <img class="w-36" src={assets.logo} alt="" />
        <ul class="flex list-none text-[#49557e] text-lg gap-5">
          <li onClick={()=>setMenu("Home")} className={menu==="Home"?"underline underline-offset-1 active:":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"underline underline-offset-1 active:":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"underline underline-offset-1 active:":""}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"underline underline-offset-1 active:":""}>Contact Us</li>
        </ul>
        <div class="flex items-center gap-10">
          <img src={assets.search_icon} alt="" />
          <div class="relative">
            <img src={assets.basket_icon} alt="" />
            <div class="w-2 h-2 bg-red-400 rounded-full absolute bottom-7 left-7"></div>
          </div>
          <button class="bg-transparent text-xs border-2 border-solid border-red-400 px-7 py-2 rounded-full hover:bg-red-300 ease-in duration-300 ">Sign In</button>
        </div>
    </div>
    
  )
}

export default Navbar