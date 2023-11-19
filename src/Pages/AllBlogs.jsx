import AllBlogCard from "../Components/AllBlogCard";
import { useQuery } from "@tanstack/react-query";
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
    const [title, setTitle] = useState('')



    const { isLoading, isPending, data: blogs } = useQuery({
        queryKey: ['blogs', category, title],
        queryFn:
            async () => {

                let url = `https://blog-website-server-ten.vercel.app/blogs`;

                if (category || title) {
                    url += '?';

                    if (category) {
                        url += `category=${category}`;

                    }
                    if (title) {
                        url += `title=${title}`
                    }
                }
                const res = await fetch(url)
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

            <div className="flex justify-between mt-4">

                <div className="w-48 ">

                    <label htmlFor="category">Category:</label>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className=" p-2 mt-2" id="category" name="category">
                        <option disabled selected value="Choose one">Chose one</option>
                        {categories.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div>

                    <div >
                        <label >Search for Blog Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" name="search" placeholder="Search...." className="input input-bordered w-full max-w-xs mt-2" />
                    </div>

                </div>
            </div>

            <div className="grid h-auto">
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