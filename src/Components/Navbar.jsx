import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log('user logged out', res)
            })
            .catch(error => {
                console.Log(error)
            })
    }
    const navbar =
        <div className="flex align-items">
            <li className="mr-2"><NavLink to='/'>Home</NavLink></li>
            <li className="mr-2"><NavLink to="/addblogs">Add Blog</NavLink></li>
            <li className="mr-2"><NavLink to='/allblogs'>All Blogs</NavLink></li>
            <li className="mr-2"><NavLink to='/featured'>Featured Blog</NavLink></li>
            <li><NavLink to='/wish-list'>Wishlist</NavLink></li>
        </div>

    return (
        <div className="navbar bg-base-200 flex border-b border-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div>
                    <img className="w-12" src={logo} alt="" />
                </div>
                <a className="btn btn-ghost normal-case text-xl">THE TRAVEL GEEK </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span className="mr-2 ml-4 bg-gray-200 rounded-lg shadow-lg p-2">{user.email}</span>
                            <div className="w-10 rounded-full mr-2 ">
                                <img className="w-8 lg:w-10  rounded-full " src={user.photoURL} />
                            </div>
                            <button onClick={handleLogOut} className="btn bg-red-400 w-24 btn-sm mr-2">Logout</button>
                        </> :
                        <>
                            <Link to="/login"> <button className="btn bg-green-200 w-24 btn-sm mr-2">Login</button></Link>

                            <Link to='/register'><button className="btn bg-blue-200 w-24 btn-sm mr-2">Register</button></Link>
                        </>

                }




            </div>
        </div>
    );
};

export default Navbar;