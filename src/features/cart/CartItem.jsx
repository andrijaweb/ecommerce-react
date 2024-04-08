import UpdateQuantity from "./UpdateQuantity";

const MAX_DESC_LENGTH = 12;

function CartItem({ item }) {
  const { productId, quantity, title, description, imageUrl, price } = item;
  const truncatedDescription =
    description.split(" ").slice(0, MAX_DESC_LENGTH).join(" ") +
    (description.split(" ").length > MAX_DESC_LENGTH ? "..." : "");

  return (
    <li className="flex w-[40.75rem] justify-between py-7 relative after:h-px after:bg-black after:absolute after:w-full after:bottom-0 after:left-0 after:opacity-20">
      <div className="flex">
        <div className="bg-white p-5 rounded-md w-[10.5rem] flex items-center justify-center">
          <img className="max-h-32" src={imageUrl} alt="Product" />
        </div>
        <div className="max-w-[16.125rem] ml-5">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="leading-6 mt-2.5 mb-5 opacity-70">
            {truncatedDescription}
          </p>
          <p className="text-2xl font-medium">${price}</p>
        </div>
      </div>
      <UpdateQuantity productId={productId} quantity={quantity} />
    </li>
  );
}

export default CartItem;
