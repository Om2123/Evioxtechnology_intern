import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../../firebase/firebase';

export default function Register() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const regester = (e) => { e.preventDefault(); createAccount(email, password); history("/orders") };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <Link to="/">
                        <img
                            className="w-20 mx-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                            alt="Amazon Logo"
                        />
                    </Link>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4"> Create an Amazon account </h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-600">E-mail</label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Enter your e-mail Address"
                                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600">E-mail</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your Name"
                                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="Phone" className="block text-gray-600">E-mail</label>
                            <input
                                id="Phone"
                                type="text"
                                placeholder="Enter your Mobile Number"
                                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={regester}
                            className="w-full bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-gray-600 text-sm mt-2">
                        By signing in you agree to Amazon's FAKe Clone Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                </div>
                <button
                    type="submit"
                    onClick={() => { history("/login") }}
                    className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                >
                    Already have an Amazon account? Log in
                </button>
            </div>
        </div>
    )
}
