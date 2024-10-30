import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' class="pt-10 flex flex-col items-center m-auto mt-24 text-2xl text-center font-bold w-full mb-10">
        <p>For Better Experience Download <br />Tomato App</p>
        <div class="flex items-center gap-3 mt-10 mx-auto mb-5">
            <img class="w-56 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 " src={assets.play_store} alt="" />
            <img class="w-56 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 " src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload