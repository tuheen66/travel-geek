/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AllBlogCard = ({ blog }) => {

    const { user } = useContext(AuthContext)
    const email = user?.email

    const { title, image, category, short_description } = blog

    const handleWishList = (blogItem) => {
        console.log(blogItem)

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


    return (
        <div className="card card-side bg-blue-100 shadow-xl pl-2">
            <figure><img id="image" src={image} /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <p><span className="font-bold">Category:</span> {category}</p>
                

                <p><span className="font-bold">Short description: </span>{short_description}</p>
                <div className=" flex gap-4 ">
                    <button className="btn btn-primary btn-sm">Details</button> <br />
                    <button onClick={() => handleWishList(blog)} className="btn btn-secondary btn-sm">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlogCard;