import React from "react";
import EventCard from "../components/EventCard";


const ExploreEvents = () => {
  const EventData = [
    { id: 1, title: "Solo Dancing", image: "" },
    { id: 2, title: "Solo Dancing", image: "" },
    { id: 3, title: "Solo Dancing", image: "" },
    { id: 4, title: "Solo Dancing", image: "" },
    { id: 5, title: "Solo Dancing", image: "" },
    { id: 6, title: "Solo Dancing", image: "" },
    { id: 7, title: "Solo Dancing", image: "" },
    { id: 8, title: "Solo Dancing", image: "" },
    { id: 9, title: "Solo Dancing", image: "" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-8">Explore All Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EventData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreEvents;