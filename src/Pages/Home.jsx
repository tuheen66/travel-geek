import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-12 h-screen">
                <div className="bg-green-200 col-span-9">
                    <h2>Recent blogs</h2>
                </div>
                <div className="bg-blue-200 col-span-3">
                    <h2>Newsletter</h2>
                </div>
            </div>
            <h2>This is Home</h2>

            <Footer></Footer>
        </div>
    );
};

export default Home;