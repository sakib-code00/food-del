import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/Foodroute.js"

// middleware
const app = express()
const port = 4000

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://sakibul:222112009@cluster0.26aph.mongodb.net/?