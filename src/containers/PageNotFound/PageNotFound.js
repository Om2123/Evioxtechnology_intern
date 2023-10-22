import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
 
import image404 from "../../assets/images/pageNotFound/image404.svg"; 
 
const PageNotFound = ({ history }) => {
   const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.maLoaiNguoiDung === "GV";
  const [isAdminRouter, setIsAdminRouter] = useState(null);
  const pathName = history.location.pathname;

  if (!isAdminRouter) {
    if (pathName === "/courses-management") {
      setIsAdminRouter(true);
    } else if (pathName === "/users-management") {
      setIsAdminRouter(true);
    }
  }

  if (isAdminRouter && isAdmin) {
    window.location.reload();
  }

  return (
    <div className="bg-[#222425] min-h-screen flex items-center justify-center">
    {isAdminRouter && isAdmin ? (
      <div className="text-white text-center">
        <p>Granting permission to admin...</p>
      </div>
    ) : (
      <div className="bg-stars bg-repeat bg-cover bg-left-top relative">
        <div className="p-17 md:p-10 text-center">
          <img
            src={image404}
            alt="image404"
            className="relative z-10 pointer-events-none"
            width="300px"
          />
          <Link
            to="/"
            className="block mt-5 bg-yellow-400 text-white px-6 py-3 border rounded-full hover:bg-yellow-500 hover:text-black text-center text-xs md:text-sm mx-auto"
          >
            GO BACK HOME
          </Link>
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
           
            
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-glowStar animation-delay-1s"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-glowStar animation-delay-3s"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-glowStar animation-delay-5s"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-glowStar animation-delay-7s"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-glowStar animation-delay-9s"></div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default withRouter(PageNotFound);
