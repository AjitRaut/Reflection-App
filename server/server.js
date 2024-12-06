const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

require("dotenv").config();
const app = express();

connectDB();
app.use(express.json());
app.use(require("cors")());

app.use("/auth", authRoutes);
app.use("/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
