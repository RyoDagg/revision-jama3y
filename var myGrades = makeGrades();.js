var myGrades = makeGrades();
myGrades.add("Javascript", 20);
myGrades.add("Math", 15);
myGrades.add("Frensh", 17);
myGrades.grades;

// {Javascript: 20, Math: 15, Frensh: 17}

function makeGrades() {
  var grades = {};

  return {
    grades: grades,

    add: function (material, grade) {
      grades[material] = grade;
    },

    average: function () {
      var gradesArray = Object.values(grades);
      var sum = 0;
      for (let i = 0; i < gradesArray.length; i++) {
        sum = sum + gradesArray[i];
      }
      return sum / gradesArray.length;
    },
  };
}

function makeStopwatch() {
  var end;
  var watch = {};
  watch.time = time;
  watch.start = start;
  watch.stop = stop;
  watch.reset = reset;
  return watch;
}
var time = 0;

var start = function () {
  end = setInterval(function () {
    this.time = this.time + 1;
    console.log("Elapsed time: " + this.time + "s.");
  }, 1000);
};
var stop = function () {
  clearInterval(end);
};
var reset = function () {
  clearInterval(end);
  this.time = 0;
};
