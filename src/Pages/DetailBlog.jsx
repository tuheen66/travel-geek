/* eslint-disable react/prop-types */
// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";


const DetailBlog = () => {
    
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)

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


    // const { title, image, category, short_description, long_description } = blog

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-8/12 mx-auto space-y-4 mb-12">
                <img className="" src={details.image} alt="" />
                <h2 className="text-2xl font-bold"> {details.title}</h2>
                <p><span className="font-bold">Short description:</span> {details.short_description}</p>
                <p className="text-justify"><span className="font-bold"> Long description:</span>{details.long_description} </p>
            </div>
            <div className="w-1/3">
                <form className="flex flex-col space-y-4">
                    <label className="font-bold" htmlFor="long_description">Comment:</label>
                    <textarea className="border border-gray-300 p-2" name="long_description" rows="4" required></textarea>
                    <button className="btn btn-accent w-1/2 btn-sm ">Submit</button>

                </form>
            </div>
        </div>
    );
};

export default DetailBlog;