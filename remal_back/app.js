//Constans=====================================
const fs = require('fs')
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000 ;

//Calling helpers==============================

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
app.use(cookieParser());
app.use(cors())
app.use(require('./appRoutes.js'));

//Listening to the port========================

app.listen(port, () => {
  console.log(`Apppp listening at http://localhost:${port}`)
});

