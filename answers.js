var answer0 = ["<h1>Smiley Game</h1>", "<p id='score'>0</p>",
               "<img id='smiley' src='http://bit.ly/1erPIoe'>",
               "<img id='rabbit' src='http://bit.ly/1Ingp4K'>"];

var answer1 = ["h1 {", "\tcolor: orange;", "}", "p {", "\tcolor: blue;", "}",
               "img {", "\tposition: absolute", "}"];

var answer2 = answer1.push("#smiley {", "\ttop: 200px;", "\tleft: 50px;", "}",
                           "#rabbit {", "\ttop: 100px;", "\tleft: 300px;", "}");
function showAnswer(num) {
  if(num == 0) {
    html_editor.setValue(answer0.join("\n"));
  }

  if(num == 1) {
    css_editor.setValue(answer1.join("\n"));
  }

  if(num == 2) {
    css_editor.setValue(answer2.join("\n"));
  }
}
