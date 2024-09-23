import express from "express";
import {
  getSchipolFlightById,
  getSchipolFlights,
} from "../../controller/schipolController";

const router = express.Router();

router.get("/", getSchipolFlights);
router.get("/:id", getSchipolFlightById);

export default router;
