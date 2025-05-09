import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover h-100vh bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('/img2.jpeg')", // Replace with your image path
        backdropFilter: "blur(8px)",
      }}
    >
      <div className=" bg-opacity-40 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to <span className="text-yellow-300">Your BlogSpace</span>
        </h1>
        <p className="text-lg text-white mb-6 py-3">
          Share your thoughts, stories, and ideas with the world.Easy to use,beautifully designed.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-teal-600 text-amber-900 rounded-md font-semibold hover:bg-teal-700"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 border text-amber-900 bg-teal-600 rounded-md font-semibold hover:bg-teal-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
