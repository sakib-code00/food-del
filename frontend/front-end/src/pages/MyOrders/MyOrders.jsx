import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const{url,token} = useContext(StoreContext);
    const [data,setdata] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setdata(response.data.data);

    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])


  return (
    <div>
        <h2>My Orders</h2>
        <div>
            {data.map((order,index)=>{
                return (
                    <div key={index} className='my-orders-orders'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index === order.items.length-1) {
                                return item.name+" x "+item.quantity
                            }
                            else{
                                return item.name+" x "+item.quantity+" , "
                            }
                            
                        })}</p>
                        
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&@x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders