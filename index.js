import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
app.use(express.json());

const mongodb_url = import.meta.env.mongodb_uri;
mongoose.connect(mongodb_url);

app.use("/profiles", userRoutes);
app.use("/admin", adminRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
