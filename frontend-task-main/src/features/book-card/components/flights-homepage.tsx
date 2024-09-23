import useSortingStore from "@/hooks/store";
import { useFlights } from "../api/get-flights";
import { FlightCard } from "./flight-card";
import { Flight } from "@/types/api";
import { ScrollArea } from "@/components/ui/scroll-area";

const filterByStops = (flights: Flight[] | undefined, stopsFilter: string) => {
  return flights?.filter((flight) => {
    const stopCount = flight.route?.destinations?.length
      ? flight.route.destinations.length - 1
      : 0;

    if (stopsFilter === "nonstop") return stopCount === 0;
    if (stopsFilter === "1stop") return stopCount === 1;
    if (stopsFilter === "2plusstop") return stopCount >= 2;

    return true;
  });
};

const sortFlights = (flights: Flight[] | undefined, sortBy: string) => {
  if (!sortBy || !flights) return flights;

  const [key, direction] = sortBy.startsWith("+")
    ? [sortBy.slice(1), "asc"]
    : [sortBy.slice(1), "desc"];

  return flights.sort((a, b) => {
    const valA = a[key as keyof Flight];
    const valB = b[key as keyof Flight];

    if (valA !== undefined && valB !== undefined) {
      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA !== undefined && valB !== undefined && valA > valB)
        return direction === "asc" ? 1 : -1;
    }
    return 0;
  });
};

export const FlightsHomepage = () => {
  const { data } = useFlights({ airline: "KL" });

  const stops = useSortingStore((state) => state.stops);
  const sortBy = useSortingStore((state) => state.sortBy);

  const filteredFlights = stops
    ? filterByStops(data?.flights, stops)
    : data?.flights;

  const sortedFlights = sortFlights(filteredFlights, sortBy);

  if (!filteredFlights) return null;

  if (filteredFlights.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <h1 className="text-2xl font-bold">No Flights Found</h1>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full md:h-[560px] ">
      {" "}
      {/* ScrollArea ekledik */}
      <div className="flex flex-col gap-y-8">
        {sortedFlights?.map((flight) => (
          <div key={flight.id} className="flex flex-col">
            <FlightCard flight={flight} />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
