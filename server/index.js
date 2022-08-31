import express, { urlencoded } from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoutes from "./routes/posts"

const app = express();
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        author : "Uğur abiye selam",
        message  :"To-do projet",
    })
})

app.use("/posts", postRoutes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is live ${PORT}`)
    })
})
.catch(err => {
    console.log(err.message)
})