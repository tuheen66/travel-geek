import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from '../assets/image/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-blue-200 text-black">
                <aside>
                    <img className="w-28" src={logo} alt="" />
                    <h2 className="font-bold text-xl">THE TRAVEL GEEK </h2>
                    <p className="font-bold">
                         Discover, Learn, and Transform Your World
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl text-white">
                        <a className="text-blue-500"><FaTwitter></FaTwitter></a>
                        <a className="text-red-600"><FaYoutube></FaYoutube></a>
                        <a className="text-blue-600"><FaFacebookF></FaFacebookF></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;