const mongoose = require("mongoose")
const mongoURL = "mongodb+srv://goodlucksoda:goodlucksoda@cluster1.zjg3hrw.mongodb.net/";

const connectToMongo = async () => {
    mongoose.connect(mongoURL).then(() => {
      console.log("connected to mongo successfully ");
    });
  };
  
  module.exports = connectToMongo;