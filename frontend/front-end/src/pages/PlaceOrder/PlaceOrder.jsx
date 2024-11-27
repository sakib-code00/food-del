import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    conutry:"",
    phone:"" 
   })

   const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.targe.value;
    setData(data =>({...data,[name]:value}))
   }

   const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,

    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
   }

   const navigate = useNavigate();

   useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    elseif(getTotalCartAmount()=== 0) {
      navigate('/cart')
    }
   },[token])


  return (
    <div>
      <form onSubmit={placeOrder} class="flex items-start justify-between gap-12 mt-24">
        <div class="w-1/2">
          <p class="text-3xl font-semibold mb-12">Delivery Information</p>
          <div>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='First name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Last name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="email" placeholder='Email address' />
          <input required name='street' onChange={onChangeHandler} value={data.street}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Street' />
          <div class="flex gap-3">
            <input required name='city' onChange={onChangeHandler} value={data.city}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='City' />
            <input name='state' onChange={onChangeHandler} value={data.state}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='State' />
          </div>
          <div class="flex gap-3">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode}  class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Zip code' />
            <input required name='country' onChange={onChangeHandler} value={data.conutry} class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} class="mb-4 w-full p-3 border border-gray-500 rounded-md outline-red-500" type="text" placeholder='Phone' />
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
            <button type='submit' class="text-white w-full py-3 px-3 rounded-md bg-red-400">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder