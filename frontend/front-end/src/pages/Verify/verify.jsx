import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';


const verify = () => {

    const [searchParams,setSearchParmas] = useState();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const navigate = useNavigate();
    const [url] = useContext(StoreContext);

    const verifyPayment = async () => {
      const response =axios.post(url+"/api/order/verify",{success,orderId});
      if (response.data.success) {
        navigate("/myorders");
      }
      else{
        navigate("/")
      }
    } 

    

  return (
    <div class="grid min-h-96">
        <div class="w-24 h-24 border-4 border-blue-800 rounded-full animate-spin h-5 w-5 mr-3">

        </div>
    </div>
  )
}

export default verify