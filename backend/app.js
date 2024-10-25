const express = require('express');
const app = express();
const connection = require('./config/dbconfig');
const cors = require('cors')
connection() 
require('dotenv').config();
const MainRoute = require('./routes/route')
// const globalErrorhandler = require('./utilities/errorhandler')

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));



app.use('/', MainRoute)
// app.use(globalErrorhandler)


app.listen(process.env.PORT || 8001 ,()=>{
    console.log('Server is running on 8001');
}).on('error', (error)=>{
    console.log("Error :", error);
});