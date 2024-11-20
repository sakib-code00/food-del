import React from 'react'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div class="flex justify-between items-center py-2 px-8">
        <img class="w-1/6" src={assets.logo}/>
        <img class="w-10" src={assets.profile_image}/>
    </div>
  )
}

export default Navbar