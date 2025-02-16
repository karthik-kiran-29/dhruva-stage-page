import React from "react";

const EventCard = ({ title, image, isActive }) => {
    return (
      <div className="rounded-lg overflow-hidden">
        <div 
          className={"relative h-48 bg-black"}
        >
          {
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          }
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-xl font-medium">{title}</h3>
          </div>
        </div>
      </div>
    );
  };
export default EventCard;