import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-4 bg-white shadow-lg rounded-lg mb-4">
      <div className="w-24 h-24 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="ml-4 flex-1">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold">${item.price}</p>
          <div
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={removeFromCart}
          >
            <MdDelete size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
