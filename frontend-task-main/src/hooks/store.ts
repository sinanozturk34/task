import { create } from "zustand";

type SortingState = {
  sortBy: string;
  stops: string;
  airline: string;
  setAirline: (airline: string) => void;
  setSortBy: (sortBy: string) => void;
  setStops: (stops: string) => void;
};

const useSortingStore = create<SortingState>((set) => ({
  sortBy: "",
  stops: "",
  airline: "",
  setAirline: (airline) => set({ airline }),
  setSortBy: (sortBy) => set({ sortBy }),
  setStops: (stops) => set({ stops }),
}));

export default useSortingStore;
