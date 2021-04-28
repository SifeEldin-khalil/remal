const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";

const upload = async(req, res) => {
    try {
        await uploadFile(req, res);
        //console.log("files written in disk", req.files);

        if (req.files == undefined || req.files == null || req.files.length == 0) {
            res.status(500).send({
                message: `Could not upload the files`,
                code: "002"
            });
        } else {
            let zeroFlag = false;
            for (let f of req.files) {
                if (!f.size > 0) {
                    zeroFlag = true;
                    res.json({ "code": "002", "message": "Could not upload the files" });
                }
            }
            if (zeroFlag) {
                res.end();
                return;
            }
        }
        res.status(200).send({
            message: "Uploaded the file successfully",
            files: req.files
        });
    } catch (err) {
        console.log("error: ", err);
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                code: '002',
                message: "File size cannot be larger than 10MB!",
            });
        }
        res.status(500).send({
            message: `Could not upload the file`,
            code: "002"
        });
    }
};

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/uploads/";

    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
                code: "002"
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.query.name;
    const directoryPath = __basedir + "/uploads/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. ",
                code: "002"
            });
        }
    });
};

module.exports = {
    upload,
    getListFiles,
    download,
};