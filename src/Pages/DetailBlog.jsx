/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";



const DetailBlog = () => {
    const { user } = useContext(AuthContext)
    const name = user?.displayName;
    const profilePic = user?.photoURL
    console.log(user)

    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/comments')
            .then(data => {
                const items = data.data
                const blogComments = items.filter(item=>item.id === id)
                setComments(blogComments)
                console.log(data.data)

            })
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {

                const singleBlog = data.find(details => details._id === id)
                setDetails(singleBlog)
                setLoading(false)
            })

    }, [id])

    if (loading) {
        return <Loader></Loader>
    }



    const handleCommentSubmit = (e, blogItem) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;

        blogItem = { comment, name, profilePic, id }

        fetch('http://localhost:5000/comments', {
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
        form.reset();
    }







    // const { title, image, category, short_description, long_description } = blog

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-8/12 mx-auto space-y-4 mb-12">
                <img className="mt-12" src={details.image} alt="" />
                <h2 className="text-2xl font-bold"> {details.title}</h2>
                <p><span className="font-bold">Short description:</span> {details.short_description}</p>
                <p className="text-justify"><span className="font-bold"> Long description:</span>{details.long_description} </p>
            </div>
            <div className="w-1/3 mb-12">
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <label className="font-bold" htmlFor="long_description">Your Comment:</label>
                    <textarea className="border border-gray-300 p-2" name="comment" rows="4" required></textarea>
                    <button className="btn btn-accent w-1/2 btn-sm ">Submit</button>
                </form>
            </div>

            <div>
                <h2 className="font-bold mb-4">All comments:</h2>

                {
                    comments.map(comment =>
                        <div className=" border-b border-gray-300 w-1/3 mb-4 p-2" key={comment.id}>
                            
                                <div>
                                    <div className="flex gap-4 mt-4 items-center">
                                        <h2>{comment.name}</h2>
                                        <img className="w-12 rounded-full" src={comment.profilePic} alt="" />
                                    </div >
                                    <p>{comment.comment}</p>
                                </div>
                            

                        </div>)
                }


            </div>
        </div >
    );
};

export default DetailBlog;