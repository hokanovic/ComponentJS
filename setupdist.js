let fs = require('fs-extra');
let path = require('path');

let public = path.resolve(__dirname, 'public');
let out = path.resolve(__dirname, 'distribution');

fs.removeSync(out);
fs.copySync(public, out);
