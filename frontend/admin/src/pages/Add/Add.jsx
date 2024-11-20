import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:4000";
  const [image,setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
      const response = await axios.post(`${url}/api/food/add`,formData);

      if(response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:"Salad"
          })
          setImage(false)
          toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }
    }


  return (
    <div class="w-3/4 mt-12 text-base text-gray-500 ml-6">
        <form onSubmit={onSubmitHandler} class="gap-5 flex flex-col">
          <div>
            <p>Upload Image</p>
            <label htmlFor="image">
              <img class="w-32" src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
          </div>
          <div>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} class="p-3 w-4/5 border" type="text" name='name' placeholder='Type here' />
          </div>
          <div>
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} class="p-3 w-4/5 border" name="description" rows="6" placeholder='Write content here'></textarea>
          </div>
          <div class="flex gap-8">
            <div>
              <p>Product category</p>
              <select onChange={onChangeHandler}  class="w-32 p-3 border" name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Desert</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} class="w-32 p-3 border" type="Number" name='price' placeholder='$20' />
            </div>
          </div>
          <button class="w-32 p-3 bg-black text-white font-bold" type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Add