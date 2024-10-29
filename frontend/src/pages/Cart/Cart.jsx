import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();


  return (
    <div class="mt-25 mb-20">
      <div>
        <div class="grid grid-col grid-cols-6 items-center text-gray-500 text-base">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return (
              <div>
                <div class="grid grid-cols-6 my-3 mx-0 text-black">
                  <img class="w-12" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} class="cursor-pointer">x</p>
              </div>
              <hr class="border-l bg-slate-700" />
              </div>
              
            )
          }
        })}
      </div>
      <div class="mt-20 flex justify-between gap-5">
        <div class="flex-1 flex flex-col gap-5">
          <h2>Cart totals</h2>
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
          <button onClick={()=>navigate('/order')} class="text-white w-full py-3 px-0 rounded-md bg-red-400">PROCEED TO CHECKOUT</button>
        </div>
        <div class="flex flex-1">
          <div>
            <p class="text-gray-500">If you have a promo code, Enter it here</p>
            <div class="mt-3 w-full">
              <input class="outline-none border border-solid border-gray-300 rounded-sm p-2 w-max rounded-md" type="text" placeholder='promo code' />
              <button class="text-white py-2 px-2 rounded-md bg-red-400 mx-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart