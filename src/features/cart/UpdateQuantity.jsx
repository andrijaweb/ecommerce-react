import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantity({ productId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      <button
        className="w-6 h-6 bg-mainYellow rounded-sm text-lg font-medium flex items-center justify-center"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="w-6 h-6 bg-mainYellow rounded-sm text-lg font-medium flex items-center justify-center"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateQuantity;
