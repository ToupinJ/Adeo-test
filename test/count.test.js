const { countAnimalByPeople } = require('../src/count');
const { countChildren } = require('../src/count');

describe('count', () => {
  describe('countAnimalByPeople', () => {
    it('Should add the animal quantity at the end of the people name.', () => {
      const people = {
        name: 'Pablo',
        animals: [
          { name: 'Hippopotamus' },
          { name: 'Chien' },
        ]
      };

      const expectedResult = {
        ...people,
        name: `Pablo [2]`,
      };

      expect(countAnimalByPeople(people)).toEqual(expectedResult);
    });

    it('Should add the animal quantity at the end of the people name for another people.', () => {
      const people = {
        name: 'camillo',
        animals: [
          { name: 'Hippopotamus' },
          { name: 'Chien' },
          { name: 'Chien' },
        ]
      };

      const expectedResult = {
        ...people,
        name: `camillo [3]`,
      };

      expect(countAnimalByPeople(people)).toEqual(expectedResult);
    });
  });

  describe('countChildren', () => {
    it('Should count all children and add them at the end of the parent name.', () => {
      const countries = [
        {
          name: 'Colombia',
          people: [
            {
              name: 'Pablo',
              animals: [
                { name: 'Hippopotamus' },
                { name: 'Chien' },
              ]
            },
          ],
        },
        {
          name: 'United-State',
          people: [
            {
              name: 'Donald',
              animals: [
                { name: 'muscat' },
                { name: 'rat' },
              ]
            },
            {
              name: 'Barack',
              animals: [
                { name: 'eagle' },
                { name: 'eagle' },
                { name: 'eagle' },
              ]
            },
          ],
        },
      ];

      const expectedResult = [
        {
          name: 'Colombia [1]',
          people: [
            {
              name: 'Pablo [2]',
              animals: [
                { name: 'Hippopotamus' },
                { name: 'Chien' },
              ]
            },
          ],
        },
        {
          name: 'United-State [2]',
          people: [
            {
              name: 'Donald [2]',
              animals: [
                { name: 'muscat' },
                { name: 'rat' },
              ]
            },
            {
              name: 'Barack [3]',
              animals: [
                { name: 'eagle' },
                { name: 'eagle' },
                { name: 'eagle' },
              ]
            },
          ],
        },
      ];

      expect(countChildren(countries)).toEqual(expectedResult);
    });
  });
});