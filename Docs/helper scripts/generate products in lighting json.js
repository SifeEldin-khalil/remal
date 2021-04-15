var dirs = ['Bollards',
    'Chandeliers',
    'Downlight (Recessed  surface mounted )',
    'Exit Signs',
    'Flood Lights',
    'Ground Recessed Luminaires',
    'Industrial Lighting',
    'Lighting Poles',
    'Linear lighting',
    'Panel Lighting',
    'Spotlight (Track Surface Mounted )',
    'Step Lights',
    'Wall Mounted  Luminaires (INDOOR)',
    'Wall Mounted  Luminaires (outdoor)'
]

const fs = require('fs');
var result = [];
var count = 0;
var testFolder = 'E:/Saif/remal/Docs/Lighting Products/';
for (let dir of dirs) {
    fs.readdir(testFolder + dir + '/', (err, files) => {
        files.forEach(file => {
            if (file.endsWith('.png')) {
                let item = { category: '', path: '', title: '' };
                item['category'] = dir;
                item['title'] = '';
                item['path'] = `egypt/lighting/${file}`
                result.push(item);
                count++;
                // console.log(count);
                console.log(`{ "category": "${dir}",`);
                console.log(` "title": "",`);
                console.log(` "path": "egypt/lighting/${file}"}`);
                console.log(',')
            } else {
                console.log(file);
            }

        });
    })
}