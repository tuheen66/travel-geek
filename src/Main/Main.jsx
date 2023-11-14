import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="w-11/12 mx-auto font-playpen ">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;