var answer1 = ["<h1>Smiley Game</h1>", "<p id='score'>0</p>",
               "<img id='smiley' src='http://bit.ly/1erPIoe'>",
               "<img id='rabbit' src='http://bit.ly/1Ingp4K'>"];

var answer2 = ["h1 {", "\tcolor: orange;", "}", "p {", "\tcolor: blue;", "}",
               "img {", "\tposition: absolute", "}"];

var answer3 = addToAnswer(answer2, ["#smiley {", "\ttop: 200px;", "\tleft: 50px;",
              "}", "#rabbit {", "\ttop: 101px;", "\tleft: 300px;", "}"]);

function addToAnswer(oldAnswer, arr) {
  var newAnswer = [];
  newAnswer = newAnswer.concat.apply(newAnswer, oldAnswer);
  for(var i = 0; i < arr.length; i++) {
    newAnswer.push(arr[i]);
  }
  return newAnswer;
}

function showAnswer(num) {
  if(num == 1) {
    html_editor.setValue(answer1.join("\n"));
  }

  if(num == 2) {
    css_editor.setValue(answer2.join("\n"));
  }

  if(num == 3) {
    console.dir(answer3);
    css_editor.setValue(answer3.join("\n"));
  }
}
