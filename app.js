let data = require('./data').data;
const { filterByAnimalName } = require('./src/filter');

let filterValue = process.argv.find(arg => arg.startsWith('--filter='))
if (filterValue) {
  filterValue = filterValue.split('=')[1]
  data = filterByAnimalName(filterValue, data);
}

console.log(JSON.stringify(data, null, 2))
