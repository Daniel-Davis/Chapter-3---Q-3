// Daniel Davis, Chpt 3 hw Q 3, displays people of the same gender, 1/27/15//

function person(age, gender) { // function for new person
  var age = 0; // holds value of age
  var gender = "???"; // holds gendger
  return age; // returns both values
  return gender;
}// end of person

var list = []; // new list

for (var i=0; i<10; i++) { // creates 10 new people at random age gender
  var chance = Math.random(); // generates random number
  if (chance <= .5) { // if lower than half
    var age = Math.floor((Math.random() * 50) + 1); // random age from 1-50
    var gender = 'male'; // is male
  }// end of if
  else { // if higher than half
    var age = Math.floor((Math.random() * 50) + 1); // radnom age from 1-50
    var gender = 'female'; // is female
  }// end of else
  list.push(person(age, gender)); // pushes new person to list
}// end of for

console.log(list); // prints list
