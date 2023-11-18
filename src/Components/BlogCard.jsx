/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const BlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext)
    const email = user?.email



    const handleWishList = (blogItem) => {


        blogItem = { image, title, short_description, category, email }


        fetch('http://localhost:5000/blogs/wish', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


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
                    <Link to={`/blog-details/${blog?._id}`}>
                        <button className="btn btn-primary btn-sm">Details</button>
                    </Link>
                    <button onClick={() => handleWishList(blog)} className="btn btn-secondary btn-sm">Wishlist</button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;