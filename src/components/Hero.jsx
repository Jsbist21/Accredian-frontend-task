import React from "react";

const Hero = ({ onReferNowClick }) => {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
        <p className="mb-6">Refer a friend to our courses and earn rewards!</p>
        <button
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded"
          onClick={onReferNowClick}
        >
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
