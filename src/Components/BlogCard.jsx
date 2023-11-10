/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const BlogCard = ({ blog }) => {



    const { title, image, category, short_description } = blog

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: .5 },
            }}
            className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Details</button>
                    <button className="btn btn-secondary btn-sm">Wishlist</button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;