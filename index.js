const csvtojson = require("csvtojson");
const makeDir = require("make-dir");
const path = require('path');
const fs = require('fs');

const OUTPUT_PATH = './dist'

csvtojson().fromFile('./index.csv').then((json) => {
  json.forEach((r) => {
    const parent = path.dirname(r.file);
    makeDir(path.join(OUTPUT_PATH, parent)).then(() => {
      fs.writeFileSync(path.join(OUTPUT_PATH,r.file), r.body);
    })
  })
})