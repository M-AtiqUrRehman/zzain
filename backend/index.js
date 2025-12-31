import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(5000, () => {
  console.log("🚀 Server started on port 5000");
});
