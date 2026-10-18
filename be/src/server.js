require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// ==============================
// DATABASE
// ==============================

connectDB();

// ==============================
// MIDDLEWARE
// ==============================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ==============================
// ROUTES
// ==============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PRIME Furniture API is running.",
  });
});

app.use("/api/products", productRoutes);

// ==============================
// 404
// ==============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route олдсонгүй.",
  });
});

// ==============================
// SERVER
// ==============================

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});