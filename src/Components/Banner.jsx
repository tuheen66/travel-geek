import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero xl:h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" ">
          <img
            src="https://i.ibb.co/prKRmgC/hero.jpg"
            className=" rounded-full shadow-2xl "
          />
        </div>
        <div className="lg:ml-12 lg:flex-1">
          <motion.h1 animate={{ scale: 1 }} className="text-5xl font-bold">
            THE TRAVEL GEEK!
          </motion.h1>
          <p className="py-6">
            Roam the Globe, Share Adventures, and Find Your Passport to
            Wanderlust, One Story at a Time.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
