// get the count of the animals at the end of the people name
const countAnimalByPeople = people => ({
  ...people,
  name: `${people.name} [${people.animals.length}]`
})

// get the count of the people at the end of the country name and count the animals by people
const countChildren = countries => (
  countries.map(country => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map(people => countAnimalByPeople(people))
  }))
)

module.exports = {
  countAnimalByPeople,
  countChildren,
}