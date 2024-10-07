import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";  // Added .js extension
import adminRouter from "./routes/admin-routes.js";  // Added .js extension
import movieRouter from "./routes/movie-routes.js";  // Added .js extension
import bookingsRouter from "./routes/booking-routes.js";  // Added .js extension
import cors from "cors";
dotenv.config()

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://chandubalaji:${process.env.MONGODB_PASSWORD}@cluster0.5llri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
