let { filterByAnimalName } = require('../src/filter');

describe('filter', () => {
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
        {
          name: 'Camillo',
          animals: [
            { name: 'popo' },
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
            {
              name: 'rat'
            },
          ]
        },
        {
          name: 'Barack',
          animals: [
            {
              name: 'eagle'
            },
          ]
        },
      ],
    },
  ];

  it('Should return an empty array when there is no data.', () => {
    expect(filterByAnimalName('filter', [])).toEqual([]);
  });

  it('Should return all the list when there is no filter.', () => {
    expect(filterByAnimalName('', countries)).toEqual(countries);
  });

  it('Should return one country with one person who owned the animal searched.', () => {
    const expectedResult = [{
      name: 'United-State',
      people: [{
          name: 'Barack',
          animals: [
            { name: 'eagle' },
        ],
      }],
    }];

    expect(filterByAnimalName('eag', countries)).toEqual(expectedResult);
  });

  it('Should return one country with one person with two animals searched.', () => {
    const expectedResult = [{
      name: 'Colombia',
      people: [
        {
          name: 'Pablo',
          animals: [
            { name: 'Hippopotamus' },
          ]
        },
        {
          name: 'Camillo',
          animals: [
            { name: 'popo' },
          ]
        },
      ],
    }];

    expect(filterByAnimalName('popo', countries)).toEqual(expectedResult);
  });

  it('Should return one country with two person with the animal searched.', () => {
    const expectedResult = [{
      name: 'United-State',
      people: [{
          name: 'Donald',
          animals: [
            { name: 'muscat' },
            { name: 'rat' },
        ]},
      ],
    }];

    expect(filterByAnimalName('at', countries)).toEqual(expectedResult);
  });

  it('Should return two country with one person who owned the animal searched.', () => {
    const expectedResult = [
      {
        name: 'Colombia',
        people: [{
          name: 'Pablo',
          animals: [
            { name: 'Hippopotamus' },
          ],
        }],
      }, {
        name: 'United-State',
        people: [{
            name: 'Donald',
            animals: [
              { name: 'muscat' },
          ]},
        ],
      }
    ];

    expect(filterByAnimalName('mus', countries)).toEqual(expectedResult);
  });
});