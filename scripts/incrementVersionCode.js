const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const incrementVersionCode = () => {
  const currentVersionCode = Number(pkg.code);
  const nextVersionCode = currentVersionCode + 1;
  const pathToFile = path.join(__dirname, '../package.json');
  const file = fs.readFileSync(pathToFile);
  const json = JSON.parse(file);
  json.code = nextVersionCode;
  const newFile = JSON.stringify(json);
  fs.writeFileSync(pathToFile, newFile);
  console.log(
    `Updated code version from ${currentVersionCode} to ${nextVersionCode}.`,
  );
};

incrementVersionCode();
