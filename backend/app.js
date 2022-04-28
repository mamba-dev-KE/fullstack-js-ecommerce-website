import express from "express";
import data from "./data/data.js";
import cors from "cors";
import process from "process";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

// get all products
app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

// get one product
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = data.products.find((product) => product._id === id);

  res.status(200).send(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
