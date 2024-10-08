import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useDispatch } from "react-redux";

const CartItem = ({item}) => {
  const dispatch=useDispatch();

  const handleUpdatecartItem=(quantityChange)=>{
    if (item._id) {
      const data = {
        data: { quantity: item.quantity + quantityChange },
        cartItemId: item._id, 
      };
    dispatch(updateCartItem(data));
  } else {
    console.error("Missing cart item ID for update");
  }

  }
  const handleRemoveCartItem=()=>{
    if (item._id) {
      dispatch(removeCartItem(item._id));  
    } else {
      console.error("Missing cart item ID for removal");
    }
  };
  

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top ml-3"
            src={item.product.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size:{item.size}</p>
          <p className="opacity-70 mt-2">Seller:{item.product.brand}</p>

          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold">₹{item.price}</p>
            <p className="opacity-50 line-through">₹{item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">{item.discountPercent}% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=> handleUpdatecartItem(-1)} disabled={item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton onClick={()=> handleUpdatecartItem(1)} sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253)" }}> remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;