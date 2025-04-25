const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const doctorRoutes = require("./routes/doctorRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/student', studentRoutes);
app.use("/doctor", doctorRoutes);

const connectDB = require("./config/db");
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
