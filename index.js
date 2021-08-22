const port = 5001;
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
var path = require('path');
const app = express();

app.use(morgan('dev'));
let corsOptions = {
    credentials: true,
    origin: '*',
    Methods: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/checkstatus',(req, res) => {
    res.send("Healthy")
});

app.listen(port, () => { console.log(`Listening on Port ${port}`); });