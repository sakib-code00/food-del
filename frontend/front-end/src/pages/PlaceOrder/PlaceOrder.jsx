import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div>
      <form class="flex items-start justify-between gap-12 mt-24">
        <div class="w-1/2">
          <p class="text-3xl font-semibold mb-12">Delivery Information</p>
          <div>
            <input class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='First name' />
            <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Last name' />
          </div>
          <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="email" placeholder='Email address' />
          <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Street' />
          <div class="flex gap-3">
            <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='City' />
            <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='State' />
          </div>
          <div class="flex gap-3">
            <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Zip code' />
            <input  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Country' />
          </div>
          <input class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Phone' />
        </div>
        <div class="w-1/2">
          <div class="flex-1 flex flex-col gap-5">
            <h2 class="text-3xl font-semibold mb-12">Cart totals</h2>
            <div>
              <div class="flex justify-between text-gray-500 py-2">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr class="border-l bg-slate-700" />
              <div class="flex justify-between text-gray-500 py-2">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr class="border-l bg-slate-700" />
              <div class="flex justify-between text-gray-500 py-2">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              
            </div>
            <button class="text-white w-full py-3 px-3 rounded-md bg-red-400">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder