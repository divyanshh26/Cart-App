import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-2/3">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg mt-4 lg:mt-0 lg:ml-4">
            <div className="text-2xl font-semibold mb-4">Your Cart</div>
            <div className="text-xl mb-4">Summary</div>
            <p className="text-lg mb-4">
              <span>Total Items: {cart.length}</span>
            </p>
            <p className="text-lg font-bold mb-6">Total Amount: ${totalAmount}</p>
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-200">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold mb-6">Cart Empty</h1>
          <Link to="/">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
