const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors()); // allow frontend connection

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 👉 ADD THIS LINE (VERY IMPORTANT)
app.use("/api/tasks", require("./routes/taskRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});