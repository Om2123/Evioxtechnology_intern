import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { getOrders, removeOrderFB } from '../../firebase/orderDb';

export default function Orders() {
    const [user, setUser] = useState();
    const [orders, setOrders] = useState([]);
    const [showordersList, setShowOrdersList] = useState({ bool: false, text: 'show purchased item' });
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });
    }, [])
    const showorders = async () => {
        try {
            await getOrders(user.email).then((res) => { setOrders(res) })
        } catch (error) {
            console.log(error);
        }
        setShowOrdersList({ bool: !showordersList.bool, text: showordersList.bool ? 'show purchased item' : 'hide purchased item' });

    }
    function getStatusColor(status) {
        switch (status) {
            case "pending":
                return "yellow";
            case "success":
                return "green";
            case "rejected":
                return "red";
            default:
                return "gray";
        }
    }
    const toggleProductList = () => {
        // const updatedOrders = [...orders];
        // updatedOrders[index].showProductList = !updatedOrders[index].showProductList;
        // setOrders(updatedOrders); // Update the state
    };
    const removeOrder = (id) => {
        removeOrderFB(id)
    }

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
                                <ul className="list-disc list-inside max-h-[39rem] overflow-scroll">
                                    <button onClick={showorders} className='text-xl '>{showordersList.text}</button>
                                    {/* {user.orders.map((order, index) => (
                    <li key={index} className="text-gray-800 mb-2">
                      Order #{order.orderNumber} - Total: ${order.totalAmount.toFixed(2)}
                    </li>
                  ))} */}
                                    {showordersList.bool && (
                                        <div className="flex flex-col mt-8">
                                            {orders.map((order, index) => (
                                                <div
                                                    key={index}
                                                    className="border p-4 mb-4 shadow-lg rounded-lg">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <div>
                                                            <p>Order Date: {order.doc.data.value.mapValue.fields.orderDate.stringValue}</p>
                                                            <p>Order Month: {order.doc.data.value.mapValue.fields.orderMonth.stringValue}</p>
                                                        </div>
                                                        <div>
                                                            <p>Order Status:
                                                                <span className={`text-${getStatusColor(order.doc.data.value.mapValue.fields.orderStatus.stringValue)}-500`}>
                                                                    pending
                                                                </span>
                                                            </p>
                                                            {order.doc.data.value.mapValue.fields.orderStatus.stringValue === "pending" && (
                                                                <button type="button" onClick={() => removeOrder(order.doc.key.path.segments[6])}
                                                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">

                                                                    Cancel Order
                                                                </button>

                                                            )}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => toggleProductList()}
                                                        className="text-blue-500 underline cursor-pointer">
                                                        Show All Products
                                                    </button>
                                                    {/* {order.showProductList && (
                                                <div>
                                                    <ul>
                                                        {order.orderProducts.map((product, pIndex) => (
                                                        <li
                                                        // key={pInde x}
                                                        >
                                                            product
                                                        </li>
                                                        
                                                         ))} 
                                                    </ul>
                                                </div>
                                                 )}  */}
                                                </div>
                                            ))}
                                        </div>
                                    )}


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
                            onClick={() => { navigate("/login") }}
                        >
                            Log In
                        </button>
                    </div>
            }

        </div>
    )
}
