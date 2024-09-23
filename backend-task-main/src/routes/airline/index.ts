import express from "express";
import {
  getAirlines,
  getAirlineById,
} from "../../controller/airlineController";

const router = express.Router();

router.get("/", getAirlines);
router.get("/:id", getAirlineById);

export default router;
