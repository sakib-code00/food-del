import React from 'react'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div class="flex flex-col gap-5" id='explore-menu'>
        <h1 class="font-medium text-3xl text-slate-700">Explore our menu</h1>
        <p class="w-3/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit velit id nihil veritatis repellat aperiam veniam explicabo, expedita beatae sed.</p>
        <div class="flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-auto hide-scrollbar">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item.menu_name?"border-solid border-8 rounded-full border-red-400":"w-36 min-w-20 rounded-full cursor-pointer"} class="w-36 min-w-20 rounded-full cursor-pointer" src={item.menu_image} alt=''></img>
                        <p class="mt-2 text-slate-700 text-base cursor-pointer">{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr class="my-3 mx-0 h-0.5 border-none bg-slate-400"></hr>
    </div>
  )
}

export default ExploreMenu