

const Banner = () => {
    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" flex-1">
                    <img src="https://i.ibb.co/prKRmgC/hero.jpg" className=" rounded-full shadow-2xl " />
                </div>
                <div className="ml-12 flex-1">
                    <h1 className="text-5xl font-bold">THE TRAVEL GEEK!</h1>
                    <p className="py-6">Roam the Globe, Share Adventures, and Find Your Passport to Wanderlust, One Story at a Time.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;