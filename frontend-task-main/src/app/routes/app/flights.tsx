import { Outlet } from "react-router-dom";
import { UserNav } from "@/features/user-nav/components/user-nav";
import { Earth, Plane, Tag } from "lucide-react";
import { FlightSelection } from "@/features/book-card/components/flight-selection";

export const FlightsRoute = () => {
  return (
    <div className="flex flex-col bg-mainCardBg rounded-3xl md:px-6 md:my-6 px-2 py-2 gap-y-8 md:py-6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-start">
            <Plane className="w-5 h-5 text-mainCardBg ml-0 fill-mainCardBg" />
          </div>
          <h1 className="font-bold">PLANE SCAPE</h1>
        </div>
        <div className="flex items-center gap-x-8 text-sm">
          <div className="items-center gap-x hidden md:flex md:gap-x-6">
            <div className="flex items-center gap-x md:gap-x-1">
              <Tag className="text-white fill-mainPurple" />
              <span>Deals</span>
            </div>
            <div className="flex items-center gap-x md:gap-x-1">
              <Earth className="text-mainPurple" />
              <span>Discover</span>
            </div>
          </div>
          <UserNav />
        </div>
      </div>
      <FlightSelection />
      <Outlet />
    </div>
  );
};
