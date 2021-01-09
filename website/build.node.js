const fs = require('fs');

const fileName = './build/index.html';

const fileTxt = fs.readFileSync(fileName).toString();

let newFileTxt = fileTxt.replace(/(\/static\/)/g, '/site$1');

fs.writeFileSync(fileName, newFileTxt);