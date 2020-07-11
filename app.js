/* eslint-disable no-undef */
'use strict';
/* eslint-env jquery */

/**
 * Example store structure
 */
const questions = [
  // 5 or more questions are required
  {
    question: 'Who was the first planeswalker introduced in the magic story line?(not the oldest!)',
    answers: [
      'Mishra',
      'Chandra',
      'Urza',
      'Dyfed'
    ],
    correctAnswer: 'Dyfed',
    answered: false,
    image: '<img src = "images/planeswalkers.jpg">',
    correctImage: '<img src = "images/teferi.jpg">'
  },
  {
    question: 'Who won the brothers war?',
    answers: [
      'Girrard',
      'Sqwee',
      'Mishra',
      'Urza'
    ],
    correctAnswer: 'Urza',
    answered: false,
    image: '<img src = "images/brothers_war.jpg">',
    correctImage: '<img src = "images/black_lotus.jpg">'
  },
  {
    question: 'What was the name of Captain Sisay\'s ship?',
    answers: [
      'Weatherlight',
      'Stormbreaker',
      'Legacy',
      'Burning Vengeance'
    ],
    correctAnswer: 'Weatherlight',
    answered: false,
    image: '<img src = \'images/sisay.jpg\'>',
    correctImage: '<img src = "images/The-Weatherlight.jpg">'
  },
  {
    question: 'What plane was Chandra from?',
    answers: [
      'Kaladesh',
      'Regatha',
      'Zendikar',
      'Alara'
    ],
    correctAnswer: 'Regatha',
    answered: false,
    image: '<img src = \'images/chandra.jpg\'>',
    correctImage: '<img src = \'images/ragatha.jpg\'>'
  },
  {
    question: 'Where is the seat of Bolas?',
    answers: [
      'Dominaria',
      'Kamigawa',
      'Ravnica',
      'The meditation realm'
    ],
    correctAnswer: 'The meditation realm',
    answered: false,
    image: '<img src = \'images/horns.jpg\'>',
    correctImage: '<img src = \'images/grin.jpg\'>'
  }
];


//this may be better off being moved to an entirely seperate object called state -JP
//this may be better off being moved to an entirely seperate object called state -JP
const state = {
  quizStarted: 'false',
  questionIndex: 0,
  score: 0
};
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/


//Mark Up Generator Functions -JP
//these will generate html to be injected into index.html using the .html() function in jquery -JP


// These functions return HTML templates



//function generate(){};
//function that creates template for each question answers, start screen, end screen
//function generateQuestion(){inject html with question and buttons for answers};
function generateQuestion() {//inject html with question and buttons for answers
  $('main').html(`
<div>
    <h2 class="questiontext">${questions[state.questionIndex].question}</h2>
    
    <form class="answercontainer">
        <ul>
            <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[0]}</label></button></li>
            <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[1]}</label></button></li>
            <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[2]}</label></button></li>
            <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[3]}</label></button></li>
        </ul>
    </form>
</div>
<div>${questions[state.questionIndex].image}</div>`
    //<div><button type="submit"><span>Submit</span></button>
    //</div>`
  );
}
function generateStart() {
  $('main').html(
    `<section id="start"class="board_column_body">
        <div class="board_column_body"> 
        <h2 class="welcometext board_column_header">Welcome</h2> 
        <div><h3>Press Start to Begin</h3> 
        <button class="submit_start" type="submit">
        <span>Start</span>
        </button> 
        </div> 
        </div> 
    </section>`
  );
}
function generateEnd() {//show score and button to restart-MM
  $('main').html(`
    <section id="endscreen" class="board_column_body">
            <div>
                <h2 class="finished">Thanks for playing</h2>
                <ul class="endul">
                    <li class="finalscore"><span>Score</span></li></ul>
                </ul>
            </div>
            <div>
            <button id="reset" type="reset"><label>Try Again?</label></button>
            </div>
            <div><img src = 'images/crux_of_fate.jpg'></div>
    </section>
    <section id="scoreboard"></section>
    `);
}


//function generateScore(){show score show progress};
function generateScore() {//show score show progress
  $('header').html(`<section id="scoreboard">
    <div id="scoreboard_div">
        <ul id="scoreboard_ul">
            <li id="scoreboard_li"><span>'Score: ${state.score}'</span></li>
            <li id="scoreboard_li"><span>'Progress: ${state.questionIndex} out of 5'</span></li>
        </ul>
    </div>
</section>`);
}
function generateCorrectAnswer() {//inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q
  $('main').html(` <section id="correct" class="board_column_body">
<div>
    <h2 id="correct">How did you know that?</h2>
    <ul id="correct">
        <li id="correct"><span>${questions[state.questionIndex].correctAnswer}</li>
    </ul>
</div>
<div>
    <button id="next" type="submit"><label>Next</label></button>
</div>
<div>${questions[state.questionIndex].correctImage}</div>
</section>`);
}
function generateIncorrectAnswer() {//inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q
  $('main').html(`<section id="incorrect" class="board_column_body">
    <div id="incorrect">
        <h2 id="incorrect" class="gotitwrong">Go read the lore, noob.</h2>
        <ul id="incorrect" class="incorrectanswerul">
            <li id="incorrect" class="incorrectanswer">${questions[state.questionIndex].correctAnswer}</li>
        </ul>
    </div>
    <div>
        <button id="next" type="submit"><span>Next</span></button>
    </div>
    <div><img src = 'images/wrong!.jpg'></div>
</section>`
  );
}

/********** RENDER FUNCTION(S) **********/


//function render(){};
function renderStart() {
  generateStart();
}
function renderQuestion() {
  generateQuestion();
  renderScore();
}
function renderCorrectAnswer() {//call generateanswer
  generateCorrectAnswer();
  state.score = state.score + 1;
  state.questionIndex = state.questionIndex + 1;
  renderScore();
}
function renderIncorrectAnswer() {//call generateanswer
  generateIncorrectAnswer();
  state.questionIndex = state.questionIndex + 1;
  renderScore();
}
function renderEnd() {//call generate end-MM
  generateEnd();
  renderScore();
}
//function renderScore(){call generate score};
function renderScore() {//call generate score
  $('#scoreboard').empty();
  generateScore();
}
// these should  call the generator functions and be called by event handlers-JP


// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/


function handleStartSubmit() {
  $('main').on('click','.submit_start', function () {
    console.log('start button was pressed');
    renderQuestion();

  }
  );
}
//function handleCorrect(){
function handleAnswer() {
  $('main').on('click','.answer_button', function () {
    if ($(this).closest('li').text() === questions[state.questionIndex].correctAnswer) {
      console.log(questions[state.questionIndex].correctAnswer);
      console.log('correct answer ran');
      renderCorrectAnswer();
    }
    else {
      console.log(questions[state.questionIndex].correctAnswer);
      renderIncorrectAnswer();
    }
  });
}
//increment score push user to next question
//};
//function handleWrong(){};

//maybe play sound if wrong?
function handleNextButtonPressed() {
  $('main').on('click','#next', function () {
    if (state.questionIndex === questions.length) {
      renderEnd();
    } else {
      renderQuestion();
    }
  });
}
function handleRestart() {
  $('main').on('click','#reset', function () {
    console.log('restart ran');
    location.reload();
  });
}

function handleQuiz() {
  renderStart();
  handleStartSubmit();
  handleAnswer();
  handleRestart();
  handleNextButtonPressed();
}

//these will call different generator functions for events including opening the page overall-JP


// These functions handle events (submit, click, etc)




//will start the intial html injection
$(handleQuiz);
