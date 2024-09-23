import express from "express";
import schipol from "./schipol";
import airline from "./airline";
import auth from "./auth";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/schipol", schipol);
router.use("/airline", airline);
router.use("/auth", auth);

export default router;
