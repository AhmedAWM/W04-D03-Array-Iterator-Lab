/* -------------------- Exercise 1 -------------------- */
let veryOldInventors = [];

veryOldInventors = inventors.filter((inventor) => {
    if(inventor.year >= 1500 && inventor.year <= 1599) {
        return inventor;
    }
});

console.log('Exercise 1 my result: ', veryOldInventors);
console.log('Exercise 1 correct result: ', [
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  ]);


/* -------------------- Exercise 2 -------------------- */
let inventorNames = [];

inventorNames = inventors.map((inventor) => {
    return `${inventor.first}, ${inventor.last}`;
});

console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
  { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' },
]);


/* -------------------- Exercise 3 -------------------- */
// No need to do


/* -------------------- Exercise 4 -------------------- */
let inventorNamedAda = {};

inventorNamedAda = inventors.find((inventor) => {
    if(inventor.first === "Ada") {
        return inventor;
    }
});

console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
});


/* -------------------- Exercise 5 -------------------- */
let firstLast = [];

firstLast = people.map((person) => {
    
});

console.log('Exercise 5 my result: ', firstLast);
console.log('Exercise 5 correct result: ', [
  'Carl Becker',
  'Samuel Beckett',
  'Mick Beddoes',
  'Henry Beecher',
  'Ludwig Beethoven',
  'Menachem Begin',
  'Hilaire Belloc',
  'Saul Bellow',
  'Robert Benchley',
  'Peter Benenson',
  'David Ben-Gurion',
  'Walter Benjamin',
  'Tony Benn',
  'Chester Bennington',
  'Leana Benson',
  'Silas Bent',
  'Lloyd Bentsen',
  'Ric Berger',
  'Ingmar Bergman',
  'Luciano Berio',
  'Milton Berle',
  'Irving Berlin',
  'Eric Berne',
  'Sandra Bernhard',
  'Yogi Berra',
  'Halle Berry',
  'Wendell Berry',
  'Erin Bethea',
  'Aneurin Bevan',
  'Ken Bevel',
  'Joseph Biden',
  'Ambrose Bierce',
  'Steve Biko',
  'Josh Billings',
  'Frank Biondo',
  'Augustine Birrell',
  'Elk Black',
  'Robert Blair',
  'Tony Blair',
  'William Blake',
]);


/* -------------------- Exercise 6 -------------------- */


/* -------------------- Exercise 7 -------------------- */


/* -------------------- Exercise 8 -------------------- */


/* -------------------- Exercise 9 -------------------- */