import AllBlogCard from "../Components/AllBlogCard";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../Components/Navbar";
import { useState } from "react";
// import axios from "axios";



const categories = [
    "Beach_Destinations",
    "Mountain_Escapes",
    "Cultural_Experiences",
    "Wildlife_Encounters",
    "Historical_Sites",
    "Island_Getaways"
]

const AllBlogs = () => {

    const [category, setCategory] = useState('')

    const { isLoading, isPending, data: blogs } = useQuery({
        queryKey: ['blogs', category],
        queryFn:
            async () => {
                const res = await fetch(`http://localhost:5000/blogs/?category=${category}`)
                return res.json();
            }
    })


    if (isPending) {
        return
    }

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="w-48 ">

                <label htmlFor="category">Category:</label>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className=" p-2" id="category" name="category">

                    <option disabled selected value="Choose one">Chose one</option>

                    {categories.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}

                </select>
            </div>

            <div className="grid   h-auto">
                <div className="bg-base-200  grid grid-cols-2 gap-8 pt-8">

                    {
                        blogs?.map(blog => <AllBlogCard key={blog.id} blog={blog}></AllBlogCard>)

                    }

                </div>

            </div>
        </div>
    )
};

export default AllBlogs;