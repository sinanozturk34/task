import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Flight } from "@/types/api";

export const getFlights = ({
  airline,
}: {
  airline: string;
}): Promise<{
  flights: Flight[];
}> => {
  return api.get("/schipol/", {
    params: {
      includedelays: false,
      airline,
    },
  });
};

export const getFlightsQueryOptions = (airline: string) => {
  return queryOptions({
    queryKey: ["schipol", airline],
    queryFn: () => getFlights({ airline }),
  });
};

type UseFlightsOptions = {
  airline: string;
  queryConfig?: QueryConfig<typeof getFlightsQueryOptions>;
};

export const useFlights = ({ airline, queryConfig }: UseFlightsOptions) => {
  return useQuery({
    ...getFlightsQueryOptions(airline),
    ...queryConfig,
  });
};
