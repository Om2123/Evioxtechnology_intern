import React from 'react'
import { Typography,CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useState } from 'react';
import {  logIn } from '../../appwrite/appwrite';


// Define your Tailwind CSS classes as JavaScript objects.
const containerClass = "w-full h-screen bg-center bg-no-repeat flex bg-gradient-to-br from-blue-500 to-purple-500";
const loginFormClass = "h-5/6 w-80 bg-gray-100 p-8 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

// Define your initial form values
const initialValues = {
    username: "",
    password: "",
};


export default function SignIn() {
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const history = useHistory();


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // onSubmit(formData);
            logIn(formData.username, formData.password).then((res) => {
                console.log(res);
                history.push("/");
            })
            .catch(er => console.log(er.message))
        }
    };

    // Validate the form
    const validateForm = () => {
        const errors = {};
        const { username, password } = formData;

        if (!username) {
            errors.username = "Username is required";
        }

        if (!password) {
            errors.password = "Password is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className={containerClass}>
            <CssBaseline />
            <form className={loginFormClass} onSubmit={handleSubmit}>
                <div className="mb-10">
                    <Typography variant="h3" align="center">
                        Login
                    </Typography>
                </div>
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full py-2 px-3 rounded border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="text"
                            id="username"
                            name="username"
                            placeholder='enter the email'
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                        {formErrors.username && (
                            <div className="text-red-500 text-xs">{formErrors.username}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full py-2 px-3 rounded border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="password"
                            id="password"
                            placeholder='enter the password'
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {formErrors.password && (
                            <div className="text-red-500 text-xs">{formErrors.password}</div>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-10 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded focus:outline-none focus:ring focus:ring-opacity-50"
                >
                    Login
                </button>
                <div className="mt-10 text-center text-sm">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-blue-500">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
