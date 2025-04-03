import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workoutRoutes";
import { initializeDatabase, initializeTable } from "./config/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", workoutRoutes);

// Initialize database and table before starting the server
const init = async () => {
  try {
    await initializeDatabase();
    await initializeTable();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Server initialization failed:", error);
    process.exit(1);
  }
};

init();

export default app;
