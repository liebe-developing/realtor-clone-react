import React, { useState } from "react";
import RealtorLogo from "../assets/images/realtor-logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

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
              className={`header_nav_items ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
