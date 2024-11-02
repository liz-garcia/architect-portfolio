import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. Later, we need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.get("/api", (req, res) => {
  res.send("Hello from server!");
});

app.use("/api/user", userRouter);

// * Initial server setup - data example
import dataRouter from "./routes/data.js";
app.use("/api/data", dataRouter);
// *

export default app;
