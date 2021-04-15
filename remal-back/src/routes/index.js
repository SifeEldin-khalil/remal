const express = require("express");
const router = express.Router();
const fileController = require("../controller/file.controller");
const companyController = require("../controller/company.controller");
// const { route } = require("../../example");
// const cookieParser = require('cookie-parser');
// const cors = require('cors');

var bodyParser = require('body-parser');

let routes = (app) => {
    // router.post("/Api/Upload", fileController.upload);
    // router.get("/files", controller.getListFiles);
    router.get("/Api/Files", fileController.download);
    router.get("/Api", companyController.testApi);
    router.get("/Api/Company", companyController.getCompany);
    router.get("/Api/Careers", companyController.getAllCareers);
    router.post("/Api/AddContact", companyController.addContact);
    router.post("/Api/UpdateCompany", companyController.updateCompany);
    // use to get req.body 
    app.use(bodyParser.json({ limit: '50mb', extended: true }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    // app.use(bodyParser.json());
    // app.use(cookieParser());
    // app.use(cors());
    app.use(router);



};

module.exports = routes;