import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workoutRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", workoutRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
