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

// https.createServer(options, app)
// .listen(port, () => {
//   console.log('Example app listening on https://localhost:3000/')
// })


//serve static files===============================

// app.use(express.static(path.join(__dirname, 'dist/on-printing-app')));
// app.get('/*', function(req, res) {
//  res.sendFile(path.join(__dirname, 'dist/on-printing-app/index.html'));
// });

//Errorhandlers===============================

// app.use((req, res, next)=> {
//   const err = new Error('Not Found');
//   err.status=404;
//   next(err);
// });

// app.use((err,req, res, next)=> {
//   res.locals.error = err ;
//   res.json({ error: `${err.status}` })
//   // res.send(`Error: Page is not Found ${err.status}`);
// });
