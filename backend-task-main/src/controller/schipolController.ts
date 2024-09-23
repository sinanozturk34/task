import { Request, Response } from "express";
import axiosInstance from "../utils/axiosInstance";

export const getSchipolFlights = async (req: Request, res: Response) => {
  try {
    const response = await axiosInstance.get("/public-flights/flights", {
      params: {
        includedelays: "false",
        page: "0",
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching flights:", error.message);
    res.status(500).json({ message: "Failed to fetch flights" });
  }
};

export const getSchipolFlightById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await axiosInstance.get(`/public-flights/flights/${id}`);
    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching flight:", error.message);
    res.status(500).json({ message: "Failed to fetch flight" });
  }
};
