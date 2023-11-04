import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid lg:grid-cols-12 h-screen">
                <div className="bg-green-200 col-span-8">
                    <h2>Recent blogs</h2>
                </div>
                <div className="bg-blue-200 col-span-4 px-2 pt-4">
                    <Newsletter></Newsletter>
                </div>
            </div>
           

            <Footer></Footer>
        </div>
    );
};

export default Home;