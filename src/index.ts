import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from 'morgan'
import { authRoute } from "./api/routes/user_route"


//env file configuration 
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

//midlewares
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(morgan('tiny'))

//routes
app.use('/api/auth/', authRoute)


//Welcome to eazyevent
app.get('/', (req, res) => {
    res.status(200).json({ "message": "Welcome to Easyevent" });
})

//listern
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}.`)
})