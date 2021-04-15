// const fs = require('fs')
// const files = fs.readdirSync(__dirname)

// for (const file of files) {
//     console.log(__dirname, file)
//         // if (file.endsWith('.md')) {
//     fs.rename(
//             __dirname + '/' + 'b' + file,
//             err => {
//                 console.log(err)
//             }
//         )
//         // }
// }
'use strict';
const [fs, path] = [require('fs'), require('path')];
var dirName = "E:/Saif/remal/Docs/Lighting Products/Wall Mounted  Luminaires (outdoor)"
fs.readdir(dirName, (err, data) => {
    data.map(d => {
        console.log(dirName);
        if (d.endsWith('.png')) {
            let name = 'wm' + d;
            fs.renameSync(path.resolve(dirName, d), path.resolve(dirName, name));
        }
    })
});