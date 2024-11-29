import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slice/authSlice";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.authUser.userInfo)


  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    navigate('/login')
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="shadow-lg z-50 py-7 relative " style={{ background: "#E74C3C" }}>
      <div className="container mx-auto px-6 flex justify-around items-center">

        <div className="flex items-center">
          <h2 className="text-4xl font-semibold ml-10 text-yellow-500">FoodHub</h2>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-20">
          <Link to="/" className="text-white hover:text-black text-xl">
            Home
          </Link>
         
          <Link to="/review" className="text-white hover:text-black text-xl">
             Add a Review
            </Link>
            <a href="#contact" className="text-white hover:text-black text-xl">
            Contact Us
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">

          {userInfo ? (
            <div className="flex items-center space-x-4">
              <CgProfile
                onClick={handleProfile}
                size={28}
                className="text-white cursor-pointer hover:text-blue-300"
              />
              <button
                onClick={handleLogout}
                className="text-white hover:text-blue-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-blue-300">
              Login
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden text-white py-6 px-6  space-y-4 absolute w-full top-full left-0"
          style={{ background: "#55AD9B" }}
        >
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-white hover:text-black text-xl mb-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
           
          </div>
          <Link to="/review" className="text-white hover:text-black text-xl"
           onClick={() => setMenuOpen(false)}
          >
             Add a Review
            </Link>
          <a
            href="#contact"
            className="block text-lg hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>

          <div className="flex justify-center">
            {userInfo ? (
              <>
                <CgProfile
                  size={28}
                  className="cursor-pointer hover:text-blue-300"
                  onClick={() => {
                    handleProfile();
                    setMenuOpen(false);
                  }}
                />
                <p
                  className="ml-4 cursor-pointer"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </p>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-blue-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
