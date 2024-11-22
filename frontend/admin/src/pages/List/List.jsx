import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = ({url}) => {

  
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }
  
    useEffect(()=>{
      fetchList();
    },[])
  

  return (
    <div class="ml-5">
      <p>All Foods List</p>
      <div>
        <div class="grid grid-cols-5 items-center gap-3 p-3 border border-gray-500 bg-slate-300">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list-table-format grid grid-cols-5 items-center gap-3 p-3 border border-gray-500'>
              <img class="w-12" src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} class="cursor-pointer">X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List