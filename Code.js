// Daniel Davis, Chpt 3 hw Q 3, displays people of the same gender, 1/27/15//

function person(age, gender) {
  var age = 0;
  var gender = "undefined";
}// end of person

var list = [];

for (var i=0; i<1; i++) {
  var chance = Math.random();
  if (chance <= .5) {
    var age = Math.floor((Math.random() * 50) + 1);
    var gender = 'male';
  }// end of if
  else {
    var age = math.floor((Math.random() * 50) + 1);
    var gender = 'female';
  }// end of else
  list = new person(age, gender);
}// end of for
//var list = ['person(21, male)', 'person(18, female)', 'person(90, female)', 'person(32, male)', 'person(84, male)', 'person(7, female)', 'person(22, male)', 'person(10, female)', 'person(13, male)', 'person(666, male)'];

console.log(list);
