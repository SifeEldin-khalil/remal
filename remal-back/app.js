// //Constans=====================================
// const fs = require('fs')
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require("body-parser");
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = 3000;

// //Calling helpers==============================

// app.use(bodyParser.json({ limit: '50mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser());
// app.use(cors())
// app.use(require('./src/routes/appRoutes.js'));

// //Listening to the port========================

// app.listen(port, () => {
//     console.log(`Apppp listening at http://localhost:${port}`)
// });


//firebase connection=========================
var admin = require("firebase-admin");
var serviceAccount = require("./renmalServiceKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
global.db = admin.firestore();


const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;
// var corsOptions = {
//     origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});