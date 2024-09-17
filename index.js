const express = require("express");
const mongoose = require("mongoose");
const quotes_routes = require("./routes/quotes");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");

//middlewares
app.use(express.urlencoded({ extended: false }));
//middleware to set router
app.use("/", quotes_routes);
app.use(quotes_routes);

const port = process.env.port || 6600;

app.use(cors());
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
