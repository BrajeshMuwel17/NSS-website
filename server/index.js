const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const logger = require('morgan');
const port = 3000;


dotenv.config();
const MONGODB_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const postRoutes = require('./postroutes.js');
const memberRoutes = require('./memberroutes.js');
const cors = require('cors');
// const { Connect } = require('twilio/lib/twiml/VoiceResponse.js');


var corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
  };
  
  
  app.use(cors(corsOptions));

const connectDB = async () => {
    let connection;
    try {
       connection = await mongoose.connect(
        MONGODB_URI,
        {
          dbName: DB_NAME,
        },
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
  
      console.log(`MongoDB connected: ${connection.connection.host}`);
      return connection;
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
      process.exit();
    }
  };


connectDB();

app.use(express.json());
app.use(logger('dev'));
app.use('/posts', postRoutes);
app.use('/members', memberRoutes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
