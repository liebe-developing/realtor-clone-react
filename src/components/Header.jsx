import React from "react";
import RealtorLogo from "../assets/images/realtor-logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="border-b bg-white shadow-sm sticky top-0 z-50 select-none">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={RealtorLogo}
            alt="Realtor Logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex items-center space-x-10">
            <li
              className={`${
                pathMatchRoute("/") && "text-black border-b-red-500"
              } header_nav_items`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              } header_nav_items`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              } header_nav_items`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
