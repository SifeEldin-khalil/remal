const testApi = (req, res) => {
    res.send("Hello, Your app is running fully functional");
};

const getCompany = (req, res) => {
    let name = req.query.name;
    let branch = req.query.branch;
    if (name == undefined || branch == undefined) {
        res.status(502).send("Error getting company");
        return;
    }
    db.collection("company").where('name', '==', name.toLowerCase()).where('branch', '==', branch.toLowerCase())
        .get()
        .then((documents) => {
            const doc = documents.docs[0];
            if (doc == undefined) {
                res.status(500).json({
                    message: `There is No company with name ${name} and branch ${branch}`,
                    code: '003'
                });
            } else {
                res.status(200).json({
                    company: doc.data(),
                    code: '001',
                    message: 'successful message'
                });
            }
        })
        .catch((err) => {
            console.log("Error getting company", err);
            res.status(502).json({
                code: '002',
                error: err,
                message: 'failed message'
            });
        });
};



const getAllCareers = (req, res) => {
    db.collection("career")
        .get()
        .then((documents) => {
            var careers = []
            documents.forEach(doc => {
                careers.push(doc.data());
            });
            res.status(200).json({
                careers: careers,
                code: '001',
                message: 'successful message'
            });

        })
        .catch((err) => {
            console.log("Error getting careers", err);
            res.status(502).json({
                code: '002',
                error: err,
                message: 'failed message'
            });
        });
};



//Contac Us=====================================================================

addContact = (req, res) => {
    let obj = req.body;
    db.collection(`Contact`)
        .add(obj)
        .then((docRef) => {
            res.status(200).json({
                message: 'successful message',
                code: '001',
                docId: docRef.id
            });
        })
        .catch((err) => {
            console.log("Error Add Contact", err);
            res.status(502).send("Error Add Contact", err);
        });
};



module.exports = {
    testApi,
    getCompany,
    getAllCareers,
    addContact
};