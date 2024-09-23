import { SearchedFlightCard } from "@/features/searched-fligths/components/searched-flight-card";
import React from "react";

export const SearchFlightsRoute = () => {
  return (
    <div>
      <SearchedFlightCard /> <SearchedFlightCard /> <SearchedFlightCard />{" "}
      <SearchedFlightCard /> <SearchedFlightCard />{" "}
    </div>
  );
};
