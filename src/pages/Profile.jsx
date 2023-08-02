import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const handleChange = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  const { name, email } = formData;
  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3 ">
        <form>
          {/* Name input */}
          <input
            type="text"
            id="name"
            value={name}
            disabled
            className="profile_input"
          />

          {/* Email input */}
          <input
            type="email"
            id="email"
            value={email}
            className="profile_input"
          />

          <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
            <p className="flex items-center gap-1">
              Do you want to change your name?
              <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer">
                Edit
              </span>
            </p>
            <p
              className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
              onClick={onLogout}
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
