import LocationCards from "@/components/elements/LocationCards";
import React from "react";

const Locations = () => {
  return (
    <div className="h-full w-full bg-base-100 text-7xl flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-10">
        Vi har undervisning i følgende byer
      </h1>
      <LocationCards />
    </div>
  );
};

export default Locations;
