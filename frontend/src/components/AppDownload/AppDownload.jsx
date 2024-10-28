import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div class="m-auto mt-24 text-2xl text-center font-bold w-full">
        <p>For Better Experience Download <br />Tomato App</p>
        <div class="flex item center gap-3 mt-10">
            <img class="w-64 cursor-pointer" src={assets.play_store} alt="" />
            <img class="w-64 cursor-pointer" src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload