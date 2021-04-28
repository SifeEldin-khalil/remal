const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./uploads/${req.headers.path}`);
    },
    filename: (req, file, cb) => {
        console.log("each file to write", file);
        cb(null, Date.now() + '-' + file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).array("uploads[]");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;