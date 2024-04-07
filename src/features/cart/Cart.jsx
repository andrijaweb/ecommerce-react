import { HiOutlineTruck } from "react-icons/hi2";

function Cart() {
  return (
    <div className="text-sm">
      <h1 className="text-3xl font-medium mb-10">Shopping Cart</h1>
      <div className="flex justify-between">
        <div>
          <div className="flex w-[40.75rem] justify-between py-7 relative after:h-px after:bg-black after:absolute after:w-full after:bottom-0 after:left-0 after:opacity-20">
            <div className="flex">
              <div className="bg-white p-5 rounded-md w-[10.5rem] flex items-center justify-center">
                <img className="max-h-32" src="/tshirt.jpg" alt="Product" />
              </div>
              <div className="max-w-[16.125rem] ml-5">
                <h3 className="text-lg font-medium">
                  Mens Casual Premium Slim Fit T-Shirt
                </h3>
                <p className="leading-6 mt-2.5 mb-5 opacity-70">
                  Slim-fitting style, contrast raglan long sleeve, three-button
                  henley placket...
                </p>
                <p className="text-2xl font-medium">$22.03</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="w-6 h-6 bg-mainYellow rounded-sm text-lg font-medium flex items-center justify-center">
                -
              </button>
              <span>1</span>
              <button className="w-6 h-6 bg-mainYellow rounded-sm text-lg font-medium flex items-center justify-center">
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-beigeDarker rounded-md p-5 text-lg w-[26.8125rem]">
            <h3 className="text-2xl font-medium mb-7">Order summary</h3>
            <ul className="flex flex-col gap-7">
              <li className="flex items-center justify-between">
                <p>Sub Total</p>
                <p>$78.02</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Tax</p>
                <p>$0.00</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Shipping</p>
                <p>Free</p>
              </li>
              <li className="flex items-center justify-between font-medium">
                <p>Total</p>
                <p>$63.02</p>
              </li>
            </ul>
            <button className="flex items-center justify-center gap-2.5 w-full bg-black border-2 border-black text-white py-3 rounded-md mt-7 hover:bg-transparent hover:text-black transition-all duration-300">
              <HiOutlineTruck className="text-2xl" />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
