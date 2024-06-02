import { HiChevronRight } from "react-icons/hi2";
import Button from "./Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="absolute top-0 right-0 z-0">
        <img src="/home-curve.svg" alt="home curve path background" />
      </div>
      <div className="text-sm text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl max-w-[37.875rem] font-medium mb-5">
          Better Way To Start A Shopping!
        </h1>
        <p className="opacity-70 max-w-2xl leading-6 mb-8">
          Discover a better way to embark on your shopping journey with our
          innovative e-commerce platform. Our user-friendly interface seamlessly
          connects you with an extensive range of products, from fashion
          essentials to cutting-edge gadgets, all at your fingertips. Experience
          the convenience of secure transactions and swift delivery, ensuring
          your satisfaction every step of the way. Say goodbye to the hassle of
          traditional shopping and hello to a smoother, more enjoyable
          experience tailored just for you. Start exploring today and redefine
          the way you shop!
        </p>
        <Link to="/products">
          <Button>
            <span>Start Shopping</span>
            <HiChevronRight className="inline ml-2.5" />
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
