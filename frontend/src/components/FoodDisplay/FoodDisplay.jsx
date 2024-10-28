import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div class="mt-7">
        <h2 class="text-3xl font-bold">Top dishes near you</h2>
        <div class="grid grid-cols-4 mt-7 gap-7">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay