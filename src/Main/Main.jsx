import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;