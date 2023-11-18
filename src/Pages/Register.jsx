import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
import { FaGoogle } from 'react-icons/fa';


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password)

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            setRegisterError("Your Password must contain one numeric, one Uppercase Character,  one Special Character and should be 6 at least characters long")
            return
        }

        // reset error

        setRegisterError('')
        setSuccess('')

        //create user in firebase

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setSuccess('User created successfully')

                // update user
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: url
                })
                    .then(res => {
                        console.log(res, 'profile updated')
                    })
                    .catch(err => {
                        console.error(err)
                    })

            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)

            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8 px-4">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="Text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="URL" name="url" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span className="absolute mt-12 ml-64 pt-1  " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-blue-300">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-500">{registerError} </p>
                        }
                        {
                            success && <p className="text-green-600">{success} </p>
                        }

                        <p>Already have an account? Please <span className="font-semibold text-green-600"><Link to='/login'>Login</Link></span>    </p>

                        <button onClick={handleGoogle} className="btn btn-ghost mx-8 capitalize"> <span className="text-red-600"><FaGoogle /></span>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;