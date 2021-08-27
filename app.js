let data = require('./data').data;
const { filterByAnimalName } = require('./src/filter');
const { countChildren } = require('./src/count');

let filterValue = process.argv.find(arg => arg.startsWith('--filter='))
if (filterValue) {
  filterValue = filterValue.split('=')[1];
  data = filterByAnimalName(filterValue, data);
}

if (process.argv.find(arg => arg === '--count')) {
  data = countChildren(data);
}

console.log(JSON.stringify(data, null, 2));
