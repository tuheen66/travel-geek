/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import BlogCard from "../Components/BlogCard";
import about from "../assets/image/about.jpg"



const Home = () => {


    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-ten.vercel.app/blogs');
            return res.json()
        }
    })


    if (isPending) {
        return
    }

    const convertToDate = (intTime) => {
        const [year, month, day] = intTime.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    blogs.sort((a, b) => {
        const dateA = convertToDate(a.time);
        const dateB = convertToDate(b.time);
        return dateB - dateA;
    })

    const latestSix = blogs.slice(0, 6)

    return (
        <div className="mb-8">
            <Banner></Banner>
            <div className="grid lg:grid-cols-12  h-auto">
                <div className="bg-base-200 col-span-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">

                    {
                        latestSix.slice(0, 6).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
                <div className="bg-base-200 col-span-4 pt-8 px-4">
                    <Newsletter></Newsletter>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 my-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-justify">Welcome to Travel Geek, where our passion for exploration meets the art of storytelling. We are avid adventurers, dedicated to unraveling the world's mysteries one journey at a time. What started as a shared love for discovering new cultures, flavors, and landscapes has evolved into a platform aimed at inspiring fellow wanderers. Our goal is simple: to curate an immersive travel experience through vivid narratives, practical tips, and breathtaking visuals. Whether you're a seasoned globetrotter or a novice explorer, Travel Geek is your compass to uncovering hidden gems, embracing diverse traditions, and forging unforgettable memories across the globe.</p>
                    <br />
                    <p className="text-justify">
                        At Travel Geek, authenticity and curiosity drive our wanderlust. We strive to offer more than just travel guides; we aim to spark your wanderlust and empower you to embark on your own transformative adventures. From remote villages to bustling cityscapes, we delve into the heart of each destination, sharing firsthand experiences that capture the essence of travel. Join us on this exhilarating expedition as we traverse landscapes, embrace cultures, and celebrate the beauty of our world. Let Travel Geek be your companion, guiding you to extraordinary destinations and fostering a community of passionate travelers hungry for discovery.
                    </p>
                </div>
                <div className="hidden lg:block">
                    <img className="mx-auto h-[500px] mt-4  " src={about} alt="" />
                </div>

            </div>

            {/* stats */}
            <div className="w-10/12 mx-auto mb-4">
                <div className="stats shadow flex flex-col lg:flex-row lg:gap-12">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;