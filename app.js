const express = require('express');
const dbConnection = require('./src/config/db'); //  DB connection
const signupRoute = require('./src/routes/userRoute');





const cors=require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(cors())
// Connect to the DB
dbConnection();
app.use(express.json()); 


app.use('/api', signupRoute);


// Define your routes here

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



