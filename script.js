var pos = 0, test, test_status, question, choice, choices, chA, ChB, ChC, ChD, correct = 0;

var questions = [
  ["What change sets Sheldon off the moment that he enters the apartment after returning from his 'life on the rails'?","Penny's new haircut","Raj's new girlfriend being there","The furniture has been rearranged","Bernadette sitting in his spot","A"],
  ["Finish this game title: 'Rock, paper, scissors, lizard, ______'", "Kirk", "Piccard", "Spock", "Data", "C"],
  ["What is Raj's middle name?", "Naveen", "Amar", "Ramayan", "Neil", "C"],
  ["Why does Sheldon sing 'Soft Kitty' to Penny in 'The Adhesive Duck Deficiency'?", "Because she has the flu?", "Because she dislocates her shoulder?", "Because she's homesick?", "Because she misses Leonard?", "B"],
  ["Which articles of clothing did Penny's ex-boyfriend take from Leonard and Sheldon when they try to retrieve her TV?", "Their shirts", "Their pants", "Their shoes",
  "Their underwear", "B"],
  ["What mistake does Howard make when he tries to impress Dr. Stephanie Barnett?", "He gets the Mars rover stuck in a ditch?", "He introduces her to his mother?", "He accidentally eats peanuts?", "He crashes his scooter?", "A"],
  ["What major secret about Penny is revealed in 'The Thanksgiving Decoupling'?","That she's moving back to Nebraska","That she's breaking up with Leonard","That she's going to be in a movie with Jennifer Anniston","That she married Zack in Vegas 3 years ago","D"],
  ["What are Penny, Amy, Sheldon, and Leonard in the middle of when Howard returns from space that causes them to yell, 'NOT NOW!' at him?", "Watching a horror movie", "A pie eating contest", "Packing for a camping trip", "The finale of 'Lost'", "B"],
  ["What does Sheldon do when he meets Stephen Hawking and Dr. Hawking points out a mathematical error of Sheldon's?", "He tells Dr. Hawking that he's wrong", "He faints", "He puts Dr. Hawking on his mortal enemy list", "He cries", "B"],
  ["What is Raj's signature drink?", "Strawberry Margaritas", "Moscow mules", "Grasshoppers", "Pina Coladas", "C"]
];
function _ (x) {
  return document.getElementById(x);
}
function renderQuestion () {
  test = _("test");
  if (pos >= questions.length) {
    test.innerHTML = "<h2>You scored "+correct+" of "+questions.length+" questions correct</h2>";
    _("test_status").innerHTML = "Trivia Complete!";
    pos = 0;
    correct = 0;
    return false;
  }
  _("test_status").innerHTML = "Question " + (pos+1) + " of " + questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>" + question + "</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
}
function checkAnswer(){
  choices = document.getElementByName("choices");
    for (var i = 0; i<choices.length; i++) {
      if (choices[i].checked) {
        choice = choices[i].value;
      }
    }

    if (choice == questions[pos][5]) {
      correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
