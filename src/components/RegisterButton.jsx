import React from "react";
import "aos/dist/aos.css";

const RegisterButton = () => {
    return (
        <button 
            className="bg-pink-700 hover:bg-pink-800 transition-colors text-white text-xl font-medium py-3 px-12 rounded-full w-full sm:w-auto"
            data-aos="zoom-in"
        >
            Register
        </button>
    );
};

export default RegisterButton;