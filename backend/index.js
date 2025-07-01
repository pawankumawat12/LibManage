const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const router = require('./router/router');
dotenv.config();
const connectDB = require('./config/db');


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
connectDB();
app.use("/api", router);
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});