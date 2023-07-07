import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// import { vehicleTypes } from "./types";
// import { eventTypes } from "./types";

const MONGODB_URI =
  "mongodb+srv://danielnfaro:Ak6hAWHNbh9A4Y46@vehicles.oyvpcx2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI || "mongodb://localhost:8080/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoLab instance.");
    // const db = mongoose.connection.db.collection("test.vehicles");
  })
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

// Schema for Vehicles in App
let currentDate = new Date().toJSON().slice(0, 10);

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    reqired: true,
  },
  vehicle_type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  renterVal: {
    type: Number,
    required: false,
  },
  event_type: {
    type: [String],
    required: false,
  },
  size: {
    type: Number,
    required: true,
  },
  availability: {
    type: Date,
    min: currentDate,
  },
  smoking: {
    type: Boolean,
  },
});

const Vehicle = mongoose.model("vehicles", VehicleSchema);
Vehicle.createIndexes();

// let seedData = [];
// document instance

// for (let i = 0; i < 30; i++) {
//   const randNum = Math.floor(Math.random() * eventTypes.length);
//   let randomEvents = [];

//   for (let i = 0; i < randNum; i++) {
//     randomEvents.push(eventTypes[Math.floor(Math.random() * i)]);
//   }
//   let uniqueRandomEvents = randomEvents.filter(
//     (val, idx, arr) => arr.indexOf(val) === idx
//   );
//   const getRandomSize = () => Math.floor(Math.random() * (21 - 2) + 2);
//   const randomVehicleIndex = Math.floor(Math.random() * vehicleTypes.length);
//   const vehicleName = `${faker.vehicle.manufacturer()} ${faker.vehicle.type()}`;
//   const vehicleType = vehicleTypes[randomVehicleIndex];
//   const randomImg = (arr) => arr[Math.floor(Math.random() * arr.length)];
//   let vehicleImg;

//   switch (vehicleType) {
//     case "Car":
//       vehicleImg = randomImg(cars);
//       break;
//     case "Van":
//       vehicleImg = randomImg(vans);
//       break;
//     case "Limousine":
//       vehicleImg = randomImg(limos);
//       break;
//     case "Bus":
//       vehicleImg = randomImg(buses);
//       break;
//     case "SUV":
//       vehicleImg = randomImg(suvs);
//       break;
//     default:
//       vehicleImg = randomImg(cars);
//   }

//   let sampleVehicle = new Vehicle({
//     name: vehicleName,
//     id: faker.number.int({ min: 1000, max: 100000 }),
//     vehicle_type: vehicleType,
//     image: vehicleImg,
//     event_type: uniqueRandomEvents,
//     size: getRandomSize(),
//     availability: "2023/07/15",
//     smoking: Math.random() < 0.5,
//     rating: Math.floor(Math.random() * 5 + 1),
//     price: Math.floor(Math.random() * 150 + 50),
//     renterVal: Math.floor(Math.random() * 18 + 2),
//   });
//   seedData.push(sampleVehicle);
// }
// Vehicle.insertMany(seedData);

// For backend and express
const app = express();
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
  try {
    const allVehicles = await Vehicle.find({});
    res.send({ status: "ok", data: allVehicles });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000);
