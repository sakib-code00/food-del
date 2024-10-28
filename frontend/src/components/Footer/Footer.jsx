import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id='footer' class=" bg-slate-600 flex flex-col items-center gap-5 px-20 pt-20 text-white">
        <div class="w-ful grid grid-cols-3 gap-20" >
            <div class="flex flex-col items-start gap-5">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit possimus, deserunt excepturi veniam tenetur maxime.</p>
                <div class="flex gap-5 items-start">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h2>COMPANY</h2>
                <ul>
                    <li class="mb-2 cursor-pointer">Home</li>
                    <li class="mb-2 cursor-pointer">About us</li>
                    <li class="mb-2 cursor-pointer">Delivery</li>
                    <li class="mb-2 cursor-pointer">Privacy policy</li>
                </ul>
            </div>
            <div class="flex flex-col items-start gap-5">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li class="mb-2 cursor-pointer">+8801719062730</li>
                    <li class="mb-2 cursor-pointer">contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr class="w-full  my-5 mx-0 bg-gray-300" />
        <p class="mb-5">Copyright 2024 &#169; Tomato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer