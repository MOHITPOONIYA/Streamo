import express from "express"
import {createServer} from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000));

app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))
app.use("/api/v1/users",userRoutes)

const start = async () => {
  try {
    // Store Mongo user as Express setting (optional)
    app.set("mongo_user", "mohitpooniya01_db_user");

    // Connect to MongoDB
    const connectionDb = await mongoose.connect(
      "mongodb+srv://mohitpooniya01_db_user:TAV9THfjkZAKRVSW@cluster0.u7q1tpi.mongodb.net/"
    );

    console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`);

    // Start server
    server.listen(app.get("port"), () => {
      console.log(`LISTENING ON PORT ${app.get("port")}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1); // stop app if connection fails
  }
};

start();
