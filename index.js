const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const quotes_routes = require("./routes/quotes");
require("dotenv").config();
const app = express();
const router = require("./routes/quotes");
const connectDB = require("./db/connect");
app.use(express.json());


//middlewares
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: "https://quote-api-frontend-lt1d.vercel.app",
  method: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials:true,
  allowedHeaders: "Content-Type, Authorization",
}));

app.options('*', cors()); 

//middleware to set router
app.use("/", quotes_routes);
app.use(router);

const port = process.env.port || 6600;


const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server started at port:${port}`);
    });
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};

start();
