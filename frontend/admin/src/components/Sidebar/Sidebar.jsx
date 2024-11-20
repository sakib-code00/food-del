import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div class="w-1/5 min-h-screen border border-gray-400 border-t-0">
        <div class="pt-12 pl-8 flex flex-col gap-5">
            <NavLink to='/add' className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l-lg cursor-pointer active:bg-violet-700 focus:outline-none focus:bg-violet-700">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l-lg cursor-pointer  active:bg-violet-700 focus:outline-none focus:bg-violet-700">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l-lg cursor-pointer  active:bg-violet-700 focus:outline-none focus:bg-violet-700">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar