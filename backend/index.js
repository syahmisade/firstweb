import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/auth.route.js";


dotenv.config(); //pembaca MONGO_URI

const app = express();
const PORT = process.env.PORT || 5000;

// Testing purpuses
// app.get("/", (req,res) => {
//     res.send("Hello Dunia!")
// });

app.use(express.json()); // Allow us to parse incoming request : req.body

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port: ', PORT);
});