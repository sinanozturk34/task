import { Request, Response } from "express";
import axiosInstance from "../utils/axiosInstance";

export const getAirlines = async (req: Request, res: Response) => {
  const { airline } = req.query;

  try {
    const response = await axiosInstance.get("/public-flights/flights", {
      params: {
        includedelays: "false",
        page: "0",
        airline: airline,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching flights:", error.message);
    res.status(500).json({ message: "Failed to fetch flights" });
  }
};

export const getAirlineById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await axiosInstance.get(`/public-flights/flights/${id}`);
    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching flight:", error.message);
    res.status(500).json({ message: "Failed to fetch flight" });
  }
};
