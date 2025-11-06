import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware (optional)
app.use(express.json());

// Use routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
