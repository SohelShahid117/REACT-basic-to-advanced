import { useState } from "react";
import "./App.css";
import ProductCard from "./components/productCard";

function App() {
  const products = [
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
    { id: 3, name: "Product C", price: 70 },
  ];

  const [addItem, setAddItem] = useState([]);
  const [price, setPrice] = useState(0);

  const handleAddItem = (product) => {
    console.log(product);
    // console.log("item is " + product.name);
    setAddItem((preItem) => [...preItem, product]);
    setPrice(price + product.price);
  };

  console.log(price);
  console.log(addItem);

  //enjoy this project
  return (
    <>
      <h1 className=" text-center m-5 text-2xl font-bold">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          // <ProductCard key={index} product={product} />
          <div
            key={index}
            className="m-5 p-5 shadow-md shadow-amber-600 hover:-translate-y-2 transition-all duration-200"
          >
            <div className="flex items-center flex-col">
              <h2 className="text-2xl pmb-5">{product.name}</h2>
              <h2 className="mb-5 text-2xl font-semibold">
                Price : $ {product.price}
              </h2>
              <button
                // onClick={handleAddItem}
                onClick={() => handleAddItem(product)}
                className="text-xl bg-blue-500 px-6 py-3 rounded-xl text-white hover:bg-blue-700 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center m-5">
        <p className="text-2xl font-bold mb-5">Display Cart Item</p>
        {addItem.length == 0 ? (
          <p className="text-3xl">Your Cart is Empty</p>
        ) : (
          <div>
            <ul className="list-disc pl-10">
              {addItem.map((itm) => (
                <li className="my-5 text-xl">
                  {itm.name} : ${itm.price}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-semibold text-center border-t-4 w-1/5 mx-auto pl-24">
              total : ${price}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
