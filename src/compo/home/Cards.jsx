import React from 'react'

export default function Cards() {
    const boxStyle = {
        backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/Scroll/Camera/Topdeal/n/Desktop_CC._SY304_CB575822413_.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };
    return (
        <>
            <div  className="shop-section flex flex-wrap justify-evenly bg-gray-200">

                <div  className="box w-1/4 p-4 mt-4" >
                    <div  className="box-content">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Scroll/Camera/Topdeal/n/Desktop_CC._SY304_CB575822413_.jpg" alt="" srcset="" />
                        <h2  className="text-2xl">Clothes</h2>
                        <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                        <p  className="text-blue-500">See more</p>
                    </div>
                </div>

                <div  className="box w-1/4 p-4 mt-4">
                    <div  className="box-content" style={boxStyle}>
                        <h2  className="text-2xl">Health & Personal Care</h2>
                        <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                        <p  className="text-blue-500">See more</p>
                    </div>
                </div>

                <div  className="box w-1/4 p-4 mt-4" >
                    <div  className="box-content">
                        <h2  className="text-2xl">Furniture</h2>
                        <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                        <p  className="text-blue-500">See more</p>
                    </div>
                </div>

                <div  className="box w-1/4 p-4 mt-4">
                    <div class ="box-content">
                    <h2  className="text-2xl">Electronics</h2>
                    <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                    <p  className="text-blue-500">See more</p>
                </div>
            </div>

            <div  className="box w-1/4 p-4 mt-4">
                <div  className="box-content">
                    <h2  className="text-2xl">Beauty picks</h2>
                    <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                    <p  className="text-blue-500">See more</p>
                </div>
            </div>

            <div  className="box w-1/4 p-4 mt-4">
                <div  className="box-content">
                    <h2  className="text-2xl">Pet care</h2>
                    <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                    <p  className="text-blue-500">See more</p>
                </div>
            </div>

            <div  className="box w-1/4 p-4 mt-4">
                <div  className="box-content">
                    <h2  className="text-2xl">New Arrival in Toys</h2>
                    <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                    <p  className="text-blue-500">See more</p>
                </div>
            </div>

            <div  className="box w-1/4 p-4 mt-4">
                <div  className="box-content">
                    <h2  className="text-2xl">Discover Fashion Trends</h2>
                    <div  className="box-img h-72 bg-cover mt-4 mb-4"></div>
                    <p  className="text-blue-500">See more</p>
                </div>
            </div>

        </div >
</>
  )
}
