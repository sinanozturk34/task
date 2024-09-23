import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Airline } from "@/types/api";

export const getAirline = (
  iata: string
): Promise<{
  airlines: Airline;
}> => {
  return api.get(`/airline/${iata}`);
};

export const getAirlineQueryOptions = (iata: string) => {
  return queryOptions({
    queryKey: ["airline", iata],
    queryFn: () => getAirline(iata),
  });
};

type UseAirlineOptions = {
  queryConfig?: QueryConfig<typeof getAirlineQueryOptions>;
};

export const useAirline = (
  iata: string,
  { queryConfig }: UseAirlineOptions = {}
) => {
  return useQuery({
    ...getAirlineQueryOptions(iata),
    ...queryConfig,
  });
};
