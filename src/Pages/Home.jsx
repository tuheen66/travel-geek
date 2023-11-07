import { useQuery } from "@tanstack/react-query";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import BlogCard from "../Components/BlogCard";


const Home = () => {

    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json()
        }
    })


    if (isPending) {
        return
    }


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid lg:grid-cols-12  h-auto">
                <div className="bg-base-200 col-span-8 grid grid-cols-3 gap-4 pt-8">
                    
                    {
                        blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
                <div className="bg-base-200 col-span-4 pt-8 px-4">
                    <Newsletter></Newsletter>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Home;