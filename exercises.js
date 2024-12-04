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

const splitPeople = people.map((person) => {
    return person.split(",");
});

splitPeople.forEach(person => {
  firstLast.push(`${person[1].trim()} ${person[0]}`); // Trim to elemenate the space at the beginning of the first name
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
let isAdultPresent = null;

isAdultPresent = devs.some((dev) => {
  if(dev.year < 2006) {
    return false;
  } else {
    return true;
  }
});

console.log('Exercise 6 my result: ', isAdultPresent);
console.log('Exercise 6 correct result: ', true);


/* -------------------- Exercise 7 -------------------- */
let isEveryone19OrOlder = null;

isEveryone19OrOlder = devs.every((dev) => {
  if(dev.year < 2006) {
    return true;
  } else {
    return false;
  }
});

console.log('Exercise 7 my result: ', isEveryone19OrOlder);
console.log('Exercise 7 correct result: ', false);


/* -------------------- Exercise 8 -------------------- */
let commentById = {};

commentById = comments.find((comment) => {
  if(comment.id === 823423) {
    return comment;
  }
});

console.log('Exercise 8 my result: ', commentById);
console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });


/* -------------------- Exercise 9 -------------------- */
let idx = null;

idx = comments.findIndex((commentID) => {
  if(commentID.id === 123523) {
    return commentID;
  }
});

console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);