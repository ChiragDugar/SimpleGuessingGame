flag = 1;
score = 0;
c = 0;
k = 0;
tochk = 0;

document.getElementById("first").value = "";
document.getElementById("third").value = "";
var words = [
  "harsh",
  "clinic",
  "yummy",
  "render ",
  "typist",
  "comic",
  "cardiac",
  "xerox",
  "throat",
  "civic"
];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var x = word[0];
var y = word[word.length - 1];
document.getElementById("second").value = word.slice(1, word.length - 1);

function reset() {
  flag = 1;
  c = 0;
  tochk = 0;
  k = 0;
}

function complete() {
  var a = document.getElementById("first").value;
  document.getElementById("third").value = a;
}

function checkscore() {
  var a = document.getElementById("first").value;
  if (flag > 3) {
    k = 1;
    document.getElementById("err0").innerHTML = "";
    document.getElementById("err2").innerHTML = "GAME OVER";
    document.getElementById("err1").innerHTML = "";
    return;
  }

  if (a !== x) {
    if (a == "") {
      document.getElementById("err0").innerHTML = "Enter Some Value.";
    }

    if (c == 0 && tochk == 0) {
      flag = flag + 1;
      document.getElementById("err2").innerHTML =
        "Wrong Guess! Give it another try." + "<br>Tries left: " + (4 - flag);
    } else {
      document.getElementById("err1").innerHTML = "";
      document.getElementById("err0").innerHTML =
        "You have already given the correct answer. Click the 'NEXT' button.";
    }
  } else {
    if (c !== 1 && k !== 1) {
      score = score + 1;
      c = 1;
      tochk = 1;
      document.getElementById("err0").innerHTML = "";
      document.getElementById("score").innerHTML = "My Score: " + score;
      document.getElementById("err1").innerHTML =
        "Congratulations! You have given the correct answer." +
        "Go to the next Question";
      document.getElementById("err2").innerHTML = "";
    } else {
      document.getElementById("err2").innerHTML = "Click on the 'NEXT' button";
    }
  }
}

function next() {
  document.getElementById("err0").innerHTML = "";
  document.getElementById("err1").innerHTML = "";
  document.getElementById("err2").innerHTML = "";
  if (c == 1) {
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    x = word[0];
    console.log(x);
    var y = word[word.length - 1];
    document.getElementById("second").value = word.slice(1, word.length - 1);
    document.getElementById("first").value = "";
    document.getElementById("third").value = "";
    reset();
  } else {
    document.getElementById("err0").innerHTML =
      "You can't change the question by giving the wrong answer";
  }
}