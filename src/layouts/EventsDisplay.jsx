import React, { useEffect } from "react";
import EventBanner from "../assets/group-dance.png";
import RegisterButton from "../components/RegisterButton";

const EventsDisplay = () => {
  return (
    <div className="min-h-screen bg-pink-600 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Content Section */}
        <div 
          className="text-white w-full md:w-1/2 space-y-6"
          data-aos="fade-right"
        >
          <h1 
            className="text-5xl md:text-6xl font-bold leading-tight"
            data-aos="fade-up"
          >
            Group Dance
          </h1>
          
          <div
            data-aos="fade-up"
          >
            <h2 className="text-xl font-medium mb-2">Faculty Co-ordinator</h2>
            <p className="text-lg">
              Ms. Saranya L. (Music and Dance Club - Department of
              Electronics and Communication Engineering)
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-12"
            data-aos="fade-up"
          >
            <div>
              <h3 className="text-xl font-medium mb-1">Venue: LBS Hall</h3>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Time: 1.00 PM</h3>
            </div>
          </div>
          
          <div
            data-aos="fade-up"
          >
            <h2 className="text-xl font-medium mb-3">Description:</h2>
            <ol className="list-decimal list-inside space-y-3 pl-4">
              <li>Individual on-stage event.</li>
              <li>Time duration: 1-2 minutes.</li>
              <li>
                Participants must adapt their dance styles to the music
                played.
              </li>
              <li>
                Judgment will be made base don expression,
                Choreography, Energy, and Attire.
              </li>
              <li>
                The decision of the jury shall be final with regard to the
                interpretation of the rules.
              </li>
            </ol>
          </div>
          
          
            <RegisterButton/>
          
        </div>
        
        {/* Right Image Section */}
        <div 
          className="w-full md:w-1/2 mt-8 md:mt-0"
          data-aos="fade-up"
        >
          <img
            src={EventBanner}
            alt="Group Dance Event"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsDisplay;