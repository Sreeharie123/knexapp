import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from 'morgan'
import { authRoute } from "./api/routes/user_route"
import { engine } from 'express-handlebars';

//env file configuration 
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

//midlewares
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(morgan('tiny'))
app.use(express.static('public'))


// View engine setup
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: false,
    layoutsDir: 'views'
}));

app.set('view engine', 'hbs')


//routes
app.use('/api/auth/', authRoute)


//Welcome to eazyevent
app.get('/', (req, res) => {
    res.status(200).json({ "message": "Welcome to Easyevent" });
})

//template rendering
app.get('/static', (req, res) => {
    res.render('static')
})

app.get('/dynamic', (req, res) => {
    let imageList: any = [
        {
            name: "BMW",
            src: "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg"
        },
        {
            name: "Benz",
            src: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-854852,resizemode-75,msid-72473282/industry/auto/cars-uvs/mercedes-benz-cars-to-be-pricier-by-up-to-3-from-january-2020.jpg"
        },
    ]
    res.render('dynamic', { imageList: imageList })
})


//listern
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}.`)
})