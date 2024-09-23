import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const SearchedFlightCard = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-y-4 md:flex-row md:justify-between md:pt-8 md:pb-14">
        <div className="gap-y-4 flex flex-col md:flex-row md:gap-x-8  ">
          <div className="flex items-center justify-center md:items-start">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-center gap-y-4 md:items-start ">
            <div className="text-xl md:text-3xl">
              <span>7:40 AM</span>-<span>9:12 AM</span>
            </div>
            <div className="flex justify-between text-sm w-full  md:gap-x-24 ">
              <div>
                <span className="font-semibold">Delta Air Lines</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Non-stop</span>
                <span className="font-thin">2h 32m</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">SFO to LAX</span>
                <span className="font-thin">DL 1443</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-2 ">
          <div className="flex flex-col gap-y-4 items-center justify-center border pt-2 pb-4 px-6 rounded-md">
            <span className="font-bold text-lg">$156</span>
            <span className="text-xs text-gray-400">Main</span>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center border pt-2 pb-4 px-6 rounded-md">
            <span className="font-bold text-lg">$156</span>
            <span className="text-xs text-gray-400">Main</span>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center border pt-2 pb-4 px-6 rounded-md">
            <span className="font-bold text-lg">$156</span>
            <span className="text-xs text-gray-400">Main</span>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center border pt-2 pb-4 px-6 rounded-md">
            <span className="font-bold text-lg">$156</span>
            <span className="text-xs text-gray-400">Main</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
