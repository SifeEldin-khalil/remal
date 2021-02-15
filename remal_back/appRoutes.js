//Constans=========================
const fs = require("fs");
var nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const path = require("path");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ uploadDir: "./uploads" });

//firebase connection=========================
var admin = require("firebase-admin");
var serviceAccount = require("./renmalServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

//Functions=====================================================================

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then(() => {
        next();
      })
      .catch(() => {
        res.status(403).send("Unauthorized");
      });
  } else {
    res.status(403).send("Unauthorized");
  }
}

//==================================

// function deleteFiles(pathArr) {

//   for (let i = 0; i < pathArr.length; i++) {
//     try {
//       fs.unlinkSync(`./uploads/${pathArr[i]}`);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }

//===================================

function sendEmail(name, email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "info.remalcompany@gmail.com", pass: "@reaml2021" },
  });
  let mailOptions = {
    from: "info.remalcompany@gmail.com",
    to: email,
    subject: "Remal Holding - Thanks",
    text: `Dear ${name},

We hope you are well.
your contact form has been sent.
If you have any questions or issues, Please contact us info.remalcompany@gmail.com
We will be happy to hear from you

Best Regards,
Remal Team `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

//middelwares========================

router.get("/api", (req, res) => {
  res.send("Hello, Your app is running");
});

// //Orders========================================================================
// router.get("/api/Orders", checkAuth, (req, res) => {
//   let coll = db.collection("Orders");
//   let query = coll
//     .get()
//     .then((snapshot) => {
//       if (snapshot.empty) {
//         res.status(200).json({
//           message: "There is no orders",
//         });
//       } else {
//         let allOrders = [];
//         snapshot.docs.map((doc) => {
//           allOrders.push(doc.data());
//         });
//         res.status(200).json({
//           Orders: allOrders,
//         });
//       }
//     })
//     .catch((err) => {
//       console.log("Error getting orders", err);
//       res.status(502).send("Error getting orders", err);
//     });
// });

// //Specific Order================================================================

// router.get("/api/Orders:orderId", checkAuth, (req, res) => {
//   let id = req.params.orderId;
//   // console.log("id" + id);
//   db.collection("Orders")
//     .doc(id)
//     .get()
//     .then((doc) => {
//       if (!doc.exists) {
//         res.status(200).json({ message: `There is No order with id ${id}` });
//       } else {
//         res.status(200).json({
//           order: doc.data(),
//         });
//       }
//     })
//     .catch((err) => {
//       console.log("Error getting orders", err);
//       res.status(502).send("Error getting order", err);
//     });
// });

// //=============================================

// router.delete("/api/Orders:orderId", checkAuth, (req, res) => {
//   let id = req.params.orderId;
//   let files = req.body;
//   // console.log("id" , id);
//   // console.log("files Pathes: ", files);

//   db.collection("Orders")
//     .doc(id)
//     .delete()
//     .then(() => {
//       deleteFiles(files);
//       res
//         .status(200)
//         .json({ message: `Order with id=${id} is Deleted with all files` });
//     })
//     .catch((err) => {
//       res.status(502).send("Error deleting order", err);
//     });
// });

//Contac Us=====================================================================

router.post("/api/Contacts", (req, res) => {
  let obj = req.body;
  db.collection(`Contacts`)
    .add(obj)
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      res.status(200).json({ userId: docRef.id });
    })
    .catch((err) => {
      console.log("Error Add Contact", err);
      res.status(502).send("Error Add Contact", err);
    });
});

// //Upload========================================================================

// router.use("/api/upload", function (request, response, next) {
//   next();
// });

// //=============================================

// router.post("/api/upload", multipartMiddleware, (req, res) => {
//   // console.log("filesss",req)
//   res.json({ message: req.files });
// });

// //=============================================

// router.get("/api/upload:path", checkAuth, (req, res) => {
//   let path = req.params.path;
//   res.download(`./uploads/${path}`);
// });

// //==================================Send Email==================================
// router.post("/api/send-email", (req, res) => {
//   console.log("iam replaced");
// });

// //Rate Us=====================================================================

// router.get("/api/Rating", (req, res) => {
//   db.collection(`Rating`)
//     .get()
//     .then((snapshot) => {
//       let ratingDoc;
//       snapshot.forEach((doc) => {
//         // console.log(doc.id, "=>", doc.data());
//         let rating = doc.data().rating;
//         res.status(200).json({ rating: rating });
//       });
//     });
// });

// router.post("/api/Rating", (req, res) => {
//   let rating = req.body.rating;
//   db.collection(`Rating`)
//     .get()
//     .then((snapshot) => {
//       let ratingDoc;
//       let docId;

//       snapshot.forEach((doc) => {
//         // console.log(doc.id, "=>", doc.data());
//         ratingDoc = doc.data();
//         docId = doc.id;
//       });
//       let newRating = calcRating(ratingDoc, rating);
//       let newTimes = ratingDoc.times + 1;
//       db.collection("Rating")
//         .doc(docId)
//         .update({ rating: newRating, times: newTimes });
//       res.status(200).json({ message: "rate updated" });
//     })
//     .catch((err) => {
//       console.log("Error getting Ratings", err);
//       res.status(502).send("Error getting Ratings", err);
//     });
// });

//exporting routs=========================

module.exports = router;
