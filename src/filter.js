// retrieve all animals with the passed filter bby countries
const filterByAnimalName = (filter, countries) => {
  const results = [];

  if(countries.length > 0) {
    countries.forEach(country => {
      country.people.forEach(people => {
        // get all animals which match filter
        const animals = people.animals.filter(animal => animal.name.includes(filter))

        // if there is a match
        if (animals.length > 0) {
          const existingCountry = results.find(result => result.name === country.name);
          if (existingCountry) {
            // if we are in the same country, add new people
            existingCountry.people = [
              ...existingCountry.people,
              {
                ...people,
                animals
              }
            ]
          } else {
            // if we are not in the same country, create a new country
            results.push({
              ...country,
              people: [{
                ...people,
                animals
              }]
            });
          }
        }
      })
    });
  }

  return results;
}


  module.exports = {
    filterByAnimalName,
  }
