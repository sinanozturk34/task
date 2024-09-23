import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FlightSelection = () => {
  const [value, setValue] = useState("round-trip");
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex flex-col gap-y-4 text-center md:flex-row md:justify-between md:items-center">
        <CardTitle>BOOK YOUR FLIGHT</CardTitle>
        <ToggleGroup
          type="single"
          value={value}
          onValueChange={(value) => {
            if (value) setValue(value);
          }}
          className="bg-mainCardBg rounded-full "
        >
          <ToggleGroupItem
            value="round-trip"
            className="data-[state=on]:bg-mainPurple data-[state=on]:text-mainCardBg data-[state=off]:text-mainPurple rounded-l-full px-4 py-2 text-xs font-medium transition-all   "
          >
            Round trip
          </ToggleGroupItem>
          <ToggleGroupItem
            value="one-way"
            className="data-[state=on]:bg-mainPurple data-[state=on]:text-mainCardBg data-[state=off]:text-mainPurple rounded-r-full px-4 py-2 text-xs font-medium transition-all  "
          >
            One way
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 ">
        <div className="flex gap-x-1 md:flex-1">
          <Input
            type="text"
            className="bg-white border-2 border-gray-300 text-mainPurple rounded-l-full px-2 py-1 w-full h-8 "
            startIcon={PlaneTakeoff}
          />
          <Input
            type="text"
            className="bg-white border-2 border-gray-300 text-mainPurple rounded-r-full px-2 py-1 w-full h-8 "
            endIcon={PlaneLanding}
          />
        </div>
        <div className="flex gap-x-1 md:flex-1">
          <Input
            type="text"
            className="bg-white border-2 border-gray-300 text-mainPurple rounded-l-full px-2 py-1 w-full h-8 "
            startIcon={Calendar}
          />
          <Input
            type="text"
            className="bg-white border-2 border-gray-300 text-mainPurple rounded-r-full px-2 py-1 w-full h-8 "
            endIcon={Calendar}
          />
        </div>
      </CardContent>
      <CardFooter className="md:inline-flex">
        <Button
          onClick={() => navigate("/homepage/search-flights")}
          className="bg-mainPurple text-white font-normal py-5 rounded-lg w-full"
        >
          Show flights
        </Button>
      </CardFooter>
    </Card>
  );
};
