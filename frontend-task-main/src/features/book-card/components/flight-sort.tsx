// todo: selected airlines not implemented yet

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useSortingStore from "@/hooks/store";

export const FlightSort = () => {
  const sortBy = useSortingStore((state: { sortBy: string }) => state.sortBy);

  return (
    <div className="flex flex-col gap-y-4 md:w-64 md:gap-y-8">
      <div className="flex items-center justify-between md:flex-col md:items-start md:gap-y-4">
        <Label htmlFor="select" className="w-24 md:w-auto font-bold">
          Sort by:
        </Label>

        <Select
          value={sortBy}
          onValueChange={(value) => {
            useSortingStore.setState({ sortBy: value });
          }}
        >
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Select sorting..." />
          </SelectTrigger>
          <SelectContent id="select" className="flex-1">
            <SelectGroup>
              <SelectItem value="+scheduleTime">Schedule Time (asc)</SelectItem>
              <SelectItem value="-scheduleTime">
                Schedule Time (desc)
              </SelectItem>
              <SelectItem value="+flightName">Flight Name (asc)</SelectItem>
              <SelectItem value="-flightName">Flight Name (desc)</SelectItem>
              <SelectItem value="+mainFlight">Main Flight (asc)</SelectItem>
              <SelectItem value="-mainFlight">Main Flight (desc)</SelectItem>
              <SelectItem value="+scheduleDate">Airline Code (asc)</SelectItem>
              <SelectItem value="-scheduleDate">Airline Code (desc)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-4 ">
        <Label
          htmlFor="selectArrival"
          className="w-full text-center font-bold md:text-left"
        >
          Arrival Time
        </Label>
        <RadioGroup className="flex items-center justify-center  md:flex-col md:items-start md:gap-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="default"
              id="r1"
              className="data-[state=checked]:bg-mainPurple"
            />
            <Label htmlFor="r1">5:00 AM - 11:59 AM</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="comfortable"
              id="r2"
              className="data-[state=checked]:bg-mainPurple"
            />
            <Label htmlFor="r2">12:00 PM - 5:59 PM</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-y-4">
        <Label
          htmlFor="selectStops"
          className="w-full text-center font-bold md:text-left"
        >
          Stops
        </Label>
        <RadioGroup
          className="flex items-center justify-center md:flex-col md:items-start md:gap-y-4"
          defaultValue="nonstop"
          onValueChange={(value) => useSortingStore.setState({ stops: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="nonstop"
              id="a1"
              className="data-[state=checked]:bg-mainPurple"
            />
            <Label htmlFor="a1" className="cursor-pointer">
              Nonstop
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="1stop"
              id="a2"
              className="data-[state=checked]:bg-mainPurple"
            />
            <Label htmlFor="a2" className="cursor-pointer">
              1 Stop
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="2plusstop"
              id="a3"
              className="data-[state=checked]:bg-mainPurple"
            />
            <Label htmlFor="a3" className="cursor-pointer">
              2+ Stops
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-y-4 ">
        <Label
          htmlFor="selectAirlines"
          className="w-full text-center font-bold md:text-left "
        >
          Airlines Included
        </Label>
        <ScrollArea className=" whitespace-nowrap overflow-x-auto">
          <RadioGroup
            className="flex items-center justify-center w-max md:flex-col md:items-start md:gap-y-4"
            defaultValue="b1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="b1"
                id="b1"
                className="data-[state=checked]:bg-mainPurple"
              />
              <Label htmlFor="b1">Alitalia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="b2"
                id="b2"
                className="data-[state=checked]:bg-mainPurple"
              />
              <Label htmlFor="b2">Lufthansa</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="b3"
                id="b3"
                className="data-[state=checked]:bg-mainPurple"
              />
              <Label htmlFor="b3">Air France</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="b4"
                id="b4"
                className="data-[state=checked]:bg-mainPurple"
              />
              <Label htmlFor="b4">Brussels Airlines</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="b5"
                id="b5"
                className="data-[state=checked]:bg-mainPurple"
              />
              <Label htmlFor="b5">Air Italy</Label>
            </div>
          </RadioGroup>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
