import React from "react";
import HeroPage from "../layouts/HeroPage";
import ExploreEvents from "../layouts/ExploreEvents";
import EventsDisplay from "../layouts/EventsDisplay";

const OffStageEvents = ()=>{

    const document = {OnStage: false,title:"Off-Stage Events",tagline:"To Bring Out the Beast in You"};


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
    

    return(
    <div>
      <HeroPage {...document}/>
      <ExploreEvents EventData={EventData}/>
      <EventsDisplay/>
    </div>
    )
}

export default OffStageEvents;