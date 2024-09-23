// todo airline not implemented yet bozuk
import { Flight } from "@/types/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { PlaneTakeoff, Plane, PlaneLanding } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAirline } from "../api/get-airline";

interface FlightCardProps {
  flight: Flight;
}

const calculateFlightDuration = (
  departureTime: string | undefined,
  arrivalTime: string | undefined
): string => {
  if (!departureTime || !arrivalTime) return "N/A";

  const departure = new Date(departureTime).getTime();
  const arrival = new Date(arrivalTime).getTime();

  const diffMs = Math.abs(arrival - departure);
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

  if (diffHrs === 0 && diffMins === 0 && diffSecs < 60) {
    return "0h 0m";
  }

  return `${diffHrs}h ${diffMins}m ${diffSecs}s`;
};

export const FlightCard = ({ flight }: FlightCardProps) => {
  const departureTime =
    flight.flightDirection === "A"
      ? flight.scheduleDateTime
      : flight.actualOffBlockTime;

  const arrivalTime =
    flight.flightDirection === "A"
      ? flight.actualLandingTime
      : flight.scheduleDateTime;

  const airlineIata = flight.prefixIATA;

  const flightDuration = calculateFlightDuration(departureTime, arrivalTime);

  const { data, error } = useAirline(airlineIata ?? "");

  const airlineName =
    error || !data?.airlines ? "Unknown Airline" : data.airlines.publicName;

  const randomPrice = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

  return (
    <>
      <Card className="rounded-bl-none">
        <CardHeader>
          <CardTitle className="flex gap-x-1 text-center items-center justify-center font-bold md:justify-start">
            {flight.flightDirection === "A" ? (
              <>
                <span>Amsterdam</span> -
                <span>{flight.route?.destinations?.[0] ?? "Unknown"}</span>
              </>
            ) : (
              <>
                <span>{flight.route?.destinations?.[0] ?? "Unknown"}</span> -
                <span>Amsterdam</span>
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-y-5 md:flex-row  ">
          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 md:items-start">
            <div className="flex space-x-1 items-center ">
              <PlaneTakeoff className="text-mainPurple h-4 w-4" />
              <span>Departure</span>
            </div>
            <span className="md:text-lg font-bold">
              {departureTime ? new Date(departureTime).toLocaleString() : "N/A"}
            </span>
            <span>
              Airport:{" "}
              <span className="">
                {flight.flightDirection === "A"
                  ? "AMS"
                  : flight.route?.destinations?.[0]}
              </span>
            </span>
          </div>
          <Separator className="h-8 w-0.5 bg-gray-400 md:h-0.5 md:w-24 " />

          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 ">
            <span>{airlineName}</span>
            <span>
              <Plane className="text-mainPurple h-4 w-4" />
            </span>
            <span>{flightDuration} (nonstop)</span>
          </div>
          <Separator className="h-8 w-0.5 bg-gray-400 md:h-0.5 md:w-24 " />

          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 md:items-end">
            <div className="flex space-x-1 items-center ">
              <PlaneLanding className="text-mainPurple h-4 w-4" />
              <span>Arrival</span>
            </div>
            <span className="md:text-lg font-bold">
              {arrivalTime ? new Date(arrivalTime).toLocaleString() : "N/A"}
            </span>
            <span>
              Airport:{" "}
              <span className="">
                {flight.flightDirection === "A"
                  ? flight.route?.destinations?.[0]
                  : "AMS"}
              </span>
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pr-0 pb-0 ">
          <div className="flex flex-col pb-2 gap-y-0">
            <div className="text-mainPurple font-bold">
              Price: <span className="">${randomPrice}</span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">Round trip</span>
            </div>
          </div>
          <Button className="rounded-br-xl rounded-tr-none rounded-bl-none bg-mainPurple px-6 py-6 md:px-12 md:py-8">
            Book Flight
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center md:justify-start">
        <Accordion
          className="w-full text-center md:w-auto"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-40 flex items-center justify-center bg-mainCardBgDark text-mainPurple rounded-b-lg underline underline-offset-1">
              Check the details
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2">
                <div>
                  <strong>Aircraft Type:</strong>{" "}
                  {flight.aircraftType?.iataMain ?? "Unknown"} -{" "}
                  {flight.aircraftType?.iataSub ?? "Unknown"}
                </div>
                <div>
                  <strong>Baggage Claim Belts:</strong>{" "}
                  {flight.baggageClaim?.belts?.join(", ") ?? "No Information"}
                </div>
                <div>
                  <strong>Codeshare Flights:</strong>{" "}
                  {flight.codeshares?.codeshares?.join(", ") ?? "None"}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
