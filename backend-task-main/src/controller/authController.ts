import { Request, Response } from "express";
import User from "../schemas/User";
import generateToken from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error: any) {
    console.error("Error during registration:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    if (error.code === 11000) {
      return res.status(400).json({ message: "Username already exists" });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = generateToken(user);

    res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
