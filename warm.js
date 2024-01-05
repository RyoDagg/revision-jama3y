// - create a data model to represent your classmates
var classMate1 = {
  name: "Gaddour",
  age: 27,
  gender: "male",
  hobbies: "sport",
};

// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.

function Classmate(name, age, gender, hobbies) {
  return {
    name,
    age,
    gender,
    hobbies,
  };
}

var classMate2 = Classmate("selim", 22, "male", "ch9oufa"); // 'selim is 22yo male he like ch9oufa'
var classMate3 = Classmate("stoufa", 22, "male", "presentation");
var classMate4 = Classmate("oumayma", 12, "female", "chawn the sheep");
var classMate5 = Classmate("sabrine", 25, "female", "3awed");

// - create an array to hold the classmates that you created.
var classMates = [classMate1, classMate2, classMate3, classMate4, classMate5];

// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
var displayFriend = function (classMate) {
  console.log(
    classMate.name +
      " is " +
      classMate.age +
      "yo " +
      classMate.gender +
      " and likes " +
      classMate.hobbies
  );
};

// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
var addFriend = function (mate) {
  classMates.push(mate);
};

// - calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale() {
  var result = 0;
  for (let i = 0; i < classMates.length; i++) {
    if (classMates[i].gender === "male") {
      result++;
    }
  }
  return result;
}

// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates(query, classMates) {
  var found = [];
  for (let i = 0; i < classMates.length; i++) {
    if (
      classMates[i].name === query ||
      classMates[i].age === query ||
      classMates[i].gender === query ||
      classMates[i].hobbies === query
    ) {
      found.push(classMates[i]);
    }
  }
  return found;
}
