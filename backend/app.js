import express from "express";
import data from "./data/data.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
