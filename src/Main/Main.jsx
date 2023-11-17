import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Main = () => {
    return (
        <div className="w-10/12 mx-auto font-playpen ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;