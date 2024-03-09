const yargs = require('yargs');
const xlsx = require('xlsx');
const csvtojson = require('csvtojson');
const fs = require('fs');

const argv = yargs
  .locale('en')
  .usage('$0 converts CSV to JSON.')
  .option('input', {
    description: 'path to an input csv file.',
    alias: 'i',
    type: 'string',
    demandOption: true,
  })
  .option('output', {
    description: 'path to an output directory.',
    alias: 'o',
    type: 'string',
    demandOption: false,
  })
  .alias('h', 'help').argv;

if (argv.output == null) {
  argv.output = '.';
}

console.log(`Converting ${argv.input}... (output directory: ${argv.output})`);

const workbook = xlsx.readFile(argv.input);

// offers
sheetToJson(workbook.Sheets['offers'], argv.output + '/technology-map-offers.json');

// categories
sheetToJson(workbook.Sheets['categories'], argv.output + '/technology-map-categories.json');

// relations
sheetToJson(workbook.Sheets['relations'], argv.output + '/technology-map-relations.json');

// maps
workbook.SheetNames.forEach((sheetName) => {
  if (sheetName.match(/^map/) == null) {
    return;
  }

  sheetToJson(workbook.Sheets[sheetName], argv.output + '/technology-' + sheetName + '.json');
});

// products
workbook.SheetNames.forEach((sheetName) => {
  if (sheetName.match(/^products/) == null) {
    return;
  }

  sheetToJsonForEach(workbook.Sheets[sheetName], argv.output + '/technology-map-product-', 2);
});

// news
sheetToJson(workbook.Sheets['news'], argv.output + '/technology-map-news.json');

function sheetToJson(sheet, output) {
  const json = normalizeJson(xlsx.utils.sheet_to_json(sheet, { header: 1 }));

  fs.writeFile(output, JSON.stringify(json, null, 2), (e) => {
    if (e) {
      console.error(e);
      return;
    }
    console.log(`saved to ${output}`);
  });
}

function sheetToJsonForEach(sheet, output, separate) {
  const json = normalizeJson(xlsx.utils.sheet_to_json(sheet, { header: 1 }));

  const header = json.slice(0, separate);
  const body = json.slice(separate);

  body.forEach((row, i) => {
    const obj = header.concat([row]);
    const file = output + row[0] + '.json';
    fs.writeFile(file, JSON.stringify(obj, null, 2), (e) => {
      if (e) {
        console.error(e);
        return;
      }
      console.log(`saved to ${file}`);
    });
  });
}

function normalizeJson(json) {
  // padding empty cells
  const max = json.reduce((max, row) => {
    return Math.max(max, row.length);
  }, 0);
  for (let i = 0; i < json.length; i++) {
    while (json[i].length < max) {
      json[i].push('');
    }
  }

  // remove empty rows
  for (let i = json.length - 1; i >= 0; i--) {
    if (json[i].every((cell) => cell == '')) {
      json.pop();
    } else {
      break;
    }
  }

  // null -> ''
  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].length; j++) {
      if (json[i][j] == null) {
        json[i][j] = '';
      }
    }
  }

  // any to string
  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].length; j++) {
      json[i][j] = json[i][j].toString();
    }
  }

  // \r\n -> \n
  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].length; j++) {
      json[i][j] = json[i][j].replace(/\r\n/g, '\n');
    }
  }

  return json;
}
