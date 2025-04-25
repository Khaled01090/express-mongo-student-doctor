const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/doctor", studentRoutes);

// const connectDB = require("./config/db");
// connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
