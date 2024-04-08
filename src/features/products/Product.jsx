import { getProduct } from "../../services/apiEcommerce";
import { Link, useLoaderData } from "react-router-dom";
import Stars from "../../ui/Stars";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, hasItems } from "../cart/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const hasCartItems = useSelector(hasItems);

  const product = useLoaderData();
  const navigate = useNavigate();

  const {
    id,
    image,
    price,
    rating: { rate, count },
    title,
    description,
  } = product;

  function handleAddToCart() {
    const newCartItem = {
      productId: id,
      title: title,
      description: description,
      imageUrl: image,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newCartItem));
  }

  return (
    <>
      <button className="text-blue-400 mb-5" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <div className="grid grid-cols-[6fr_6fr] gap-12">
        <div className="flex items-center justify-center w-[40.75rem] h-[39rem] p-8 bg-white rounded-lg">
          <img className="max-h-[35.1875rem]" src={image} alt="product" />
        </div>
        <div>
          <div>
            <p className="text-xs opacity-70">Article ID: {id}</p>
            <h1 className="text-3xl font-medium mt-2.5 mb-5">{title}</h1>
            <div className="flex items-center gap-2.5 mb-2.5 mt-2.5">
              <Stars maxRating={5} rating={rate} />
              <span className="text-xs opacity-50">{count} reviews</span>
            </div>
          </div>
          <p className="text-6xl font-medium my-10">${price}</p>
          <div>
            <h3 className="text-lg mb-2.5">Description:</h3>
            <p className="opacity-70 leading-6">{description}</p>
          </div>
          <div className="flex items-center gap-8 my-7">
            <Button onClick={handleAddToCart}>
              <HiOutlineShoppingBag className="text-2xl inline mr-2.5" />
              Add To Cart
            </Button>
            <button>
              <HiOutlineHeart className="text-2xl inline mr-2.5" />
              Add to Favorites
            </button>
          </div>
          {hasCartItems && (
            <Link to="/cart" className="text-blue-400">
              Go to Cart &rarr;
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return product;
}

export default Product;
