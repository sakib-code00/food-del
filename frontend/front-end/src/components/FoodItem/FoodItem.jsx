import { useContext,} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {


    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);



  return (
    <div class="w-full m-auto border-s border-4 rounded-2xl shadow-md transition transition-shadow " >
        <div class="relative">
            <img class="w-full rounded-t-2xl" src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ?<img class="w-9 absolute bottom-4 right-4 cursor-pointer rounded" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
            :<div class="absolute bottom-4 right-4 flex items-start gap-2 p-1 bg-white rounded-full">
                    <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div class="p-5">
            <div class="flex items-center justify-between mb-3">
                <p class="text-base font-medium">{name}</p>
                <img class="w-16" src={assets.rating_starts} alt="" />
            </div>
            <p class="text-slate-400 text-base">{description}</p>
            <p class="text-red-500 text-red-500 text-xl font-bold mt-2 mb-0">${price}</p>
        </div>
        
    </div>
  )
}

export default FoodItem