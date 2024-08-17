import React from "react";
import "./Productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard w-[15rem] m-2 transition-all cursor-pointer">
      <div className="h-[18rem]">
        <img
          className="h-full w-full object-cover object-center"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="textPart bg-white p-2">
        <div>
          <p className="font-bold opacity-60 text-sm">{product.brand}</p>
          <p className="text-sm">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;