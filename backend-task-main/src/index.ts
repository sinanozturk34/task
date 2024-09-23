// index.ts
import app from "./app";
import { connectToDatabase } from "./myDb";

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectToDatabase();
    console.log("Successfully connected to MongoDB");

    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database, exiting...");
    process.exit(1);
  }
}

startServer();
