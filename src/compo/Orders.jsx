import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export default function Orders() {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
            console.log(authUser);
        });
    }, [])
    return (
        <div className="max-w-4xl mx-auto p-4">
            {
                user ?
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
                        <div className="flex mb-6">
                            <div className="w-1/2  pr-4">
                                <h3 className="text-xl font-semibold mb-2">Name:</h3>
                                <p className="text-gray-800">{user?.email.match(/^([^@]+)@/)[1]}</p>
                                <h3 className="text-xl font-semibold mb-2">Email:</h3>
                                <p className="text-gray-800">{user?.email}</p>
                            </div>
                            <div className="w-1/2 pl-4">
                                <h3 className="text-xl font-semibold mb-2">Order History:</h3>
                                <ul className="list-disc list-inside">
                                    {/* {user.orders.map((order, index) => (
                    <li key={index} className="text-gray-800 mb-2">
                      Order #{order.orderNumber} - Total: ${order.totalAmount.toFixed(2)}
                    </li>
                  ))} */}

                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">User Not Logged In</h1>
                    <p className="text-gray-600 mb-4">This content is only accessible to authorized users. Please follow these steps to log in:</p>
                    <ol className="text-gray-600 text-left pl-6 mb-4">
                      <li>Click the "Log In" button below.</li>
                      <li>Enter your login credentials (username and password).</li>
                      <li>Click the "Submit" button to log in.</li>
                    </ol>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => {navigate("/login")}}
                    >
                      Log In
                    </button>
                  </div>
            }

        </div>
    )
}
