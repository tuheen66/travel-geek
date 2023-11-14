import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import axios from "axios";


const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext)

    const location = useLocation();

    const navigate = useNavigate();

    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                const loggedInUser = res.user
                const user = { email }

                console.log(loggedInUser)

                navigate(location?.state ? location.state : '/')

                toast("Login successful")
                    

                    setError('')

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
        form.reset

    }

    const handleGoogle = (email) => {
        googleSignIn()
            .then(res => {
                const loggedInUser = res.user
                const user = { email }
                console.log(loggedInUser)
                navigate(location?.state ? location.state : '/')

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8 px-4">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-300">Login</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </form>
                        <p className="text-red-400 bg-red-900">{error}</p>

                        <button onClick={handleGoogle} className="btn btn-ghost mx-8 capitalize"> <span className="text-red-600"><FaGoogle /></span>Sign in with Google</button>

                        <p>Are you new to Travel Geek? Please <span className="font-semibold text-blue-500"><Link to='/register'>Register</Link></span>    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;