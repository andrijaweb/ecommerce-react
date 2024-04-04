import { Link } from "react-router-dom";
import Stars from "./Stars";

function ProductItem({ product }) {
  const {
    title,
    price,
    image,
    rating: { rate, count },
  } = product;

  return (
    <li className="w-[19.875rem]">
      <Link className="flex flex-col h-full">
        <div className="bg-white p-5 flex items-center justify-center rounded-t-lg h-[17.125rem]">
          <img
            src={image}
            alt="product"
            className="max-w-[17.375rem] max-h-full"
          />
        </div>
        <div className="bg-beigeDarker p-5 rounded-b-lg flex-grow">
          <h3 className="font-medium">{title}</h3>
          <div className="flex items-center gap-2.5 mb-2.5 mt-2.5">
            <Stars maxRating={5} rating={rate} />
            <span className="text-xs opacity-50">{count} reviews</span>
          </div>
          <p className="font-bold">${price}</p>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
