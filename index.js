import express from "express";
import weatherRoutes from "./routes/weather.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 4000;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("API is Working Well");
});

app.listen(port, () => {
  console.log("Server is Running Successfully");
});
