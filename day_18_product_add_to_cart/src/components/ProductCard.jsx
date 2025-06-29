import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="m-5 p-5 shadow-md shadow-amber-600 hover:-translate-y-2 transition-all duration-200">
      <div className="flex items-center flex-col">
        <h2 className="text-2xl pmb-5">{product.name}</h2>
        <h2 className="mb-5 text-2xl font-semibold">
          Price : $ {product.price}
        </h2>
        <button className="text-xl bg-blue-500 px-6 py-3 rounded-xl text-white hover:bg-blue-700 cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
