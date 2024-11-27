import {useContext, useState} from 'react'
import {assets} from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("Menu");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }


  return (
    <div class="py-20 px-0 flex justify-between items-center">
        <Link to='/'><img class="w-36" src={assets.logo} alt="" /></Link>
        <ul class="flex list-none text-[#49557e] text-lg gap-5">
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"underline underline-offset-1 active:":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"underline underline-offset-1 active:":""}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"underline underline-offset-1 active:":""}>Mobile-App</a>
          <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"underline underline-offset-1 active:":""}>Contact Us</a>
        </ul>
        <div class="flex items-center gap-10">
          <img src={assets.search_icon} alt="" />
          <div class="relative">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div class="w-2 h-2 bg-red-400 rounded-full absolute bottom-7 left-7" className={getTotalCartAmount()===0?"":"w-2 h-2 bg-red-400 rounded-full absolute bottom-7 left-7"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)} class="bg-transparent text-xs border-2 border-solid border-red-400 px-7 py-2 rounded-full hover:bg-red-300 ease-in duration-300 ">Sign In</button>:<div class=" relative">
            <img src={assets.profile_icon} alt="" />
            <ul class=" absolute flex flex-clo gap-3 bg-slate-200 rounded-2xl border py-3 px-6 border-red-400 list-none">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div>}
          
        </div>
    </div>
    
  )
}

export default Navbar