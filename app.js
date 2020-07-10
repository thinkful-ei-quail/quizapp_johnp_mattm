/* eslint-disable no-undef */
'use strict';
/* eslint-env jquery */

const questions = [

  {
    question: 'Who was the first planeswalker introduced in the magic story line?(not the oldest!)',
    answers: [
      'Mishra',
      'Chandra',
      'Urza',
      'Dyfed'
    ],
    correctAnswer: 'Dyfed',
    answered: false
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
    answered: false
  },
  {
    question: 'What was the name of Captian Sisay\'s ship?',
    answers: [
      'Weatherlight',
      'Stormbreaker',
      'Legacy',
      'Burning Vengeance'
    ],
    correctAnswer: 'Weatherlight',
    answered: false
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
    answered: false
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
    answered: false
  }
];



const state = {
  quizStarted: 'false',
  questionIndex: 0,
  score: 0
};


/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateQuestion() {
  $('main').html(`
<section class="parent">
  <div class="card centerme">
      <h1 class="questiontext">${questions[state.questionIndex].question}</h1>
      <form class="card centerme">
          <ul >
            <div class="answercontainer centerme">
              <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[0]}</label></button></li>
              <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[1]}</label></button></li>
            </div>
            <div class="answercontainer centerme">
              <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[2]}</label></button></li>
              <li ><button class="answer_button" type="button"><label>${questions[state.questionIndex].answers[3]}</label></button></li>
            </div>
          </ul>
      </form>
  </div>
</section>`
  );
}
function generateStart() {
  $('main').html(

    `
    <header>
      <h1 class="centerme">MTG LORE QUIZ: Planeswalkers</h1>
    </header>
    <section id="start"class="parent">
        <div class="card centerme">
          <h1 class="welcometext">Welcome</h1>
          <div class="visual centerme">
            <h3>Press Start to Begin</h3>
            <button class="submit_start" type="submit">
              <label>Start</label>
            </button>
          </div>
        </div>
    </section>`
  );
}

function generateEnd() {
  $('main').html(`
    <section id="endscreen" class="parent">
      <div class="card centerme">
        <h2 class="finished">Thanks for playing</h2>
          <div class="visual centerme">
          <h3 class="finalscore"><span> Your Final Score is ${state.score}</h3>
            <button id="reset" type="reset">
              <label>Try Again?</label>
            </button>
          </div>
        </div>
  </section>
    <section id="scoreboard"></section>
    `);
}



function generateScore() {
  $('header').html(`
  <section id="scoreboard" class=" board">
    <div id="scoreboard_div" class="score" >
      <p>Score: ${state.score}</p>
    </div>
    <div id="scoreboard_div" class="prog">
      <p ">Q: ${state.questionIndex}of 5</p>
    </div>
</section>`);
}
function generateCorrectAnswer() {
  $('main').html(`
<section id="correct" class="parent">
  <div class="card centerme">
    <h2 id="correct">How did you know that?</h2>
    <div class="visual centerme">
        <h2>Great Job!</h2>


      <div class="centerme">
        <button id="next" type="submit"><label>Next</label></button>
      </div>
    </div>
  </div>
</section>`);
}
function generateIncorrectAnswer() {
  $('main').html(`
  <section id="incorrect" class="parent">
    <div  class="card centerme">
        <h2 id="incorrect" class="gotitwrong">Go read the lore, noob.</h2>
        <div class="visual centerme">
          <h3 id="incorrect" class="incorrectanswer class="card centerme"">The answer was ${questions[state.questionIndex].correctAnswer}</h3>
          <div class="centerme">
            <button id="next" type="submit"><span>Next</span></button>
          </div>
        </div>
    </div>

</section>`
  );
}

/********** RENDER FUNCTION(S) **********/



function renderStart() {
  $("header").empty();
  generateStart();
}
function renderQuestion() {
  generateQuestion();
  renderScore();
}
function renderCorrectAnswer() {
  generateCorrectAnswer();
  state.score = state.score + 1;
  state.questionIndex = state.questionIndex + 1;
  renderScore();
}
function renderIncorrectAnswer() {
  generateIncorrectAnswer();
  state.questionIndex = state.questionIndex + 1;
  renderScore();
}
function renderEnd() {
  generateEnd();
  renderScore();
}

function renderScore() {
  $('#scoreboard').empty();
  generateScore();
}





/********** EVENT HANDLER FUNCTIONS **********/


function handleStartSubmit() {
  $('main').on('click', '.submit_start', function () {
    console.log('start button was pressed');
    renderQuestion();

  }
  );
}

function handleAnswer() {
  $('main').on('click', '.answer_button', function () {
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

function handleNextButtonPressed() {
  $('main').on('click', '#next', function () {
    if (state.questionIndex === questions.length) {
      renderEnd();
    } else {
      renderQuestion();
    }
  });
}
function handleRestart() {
  $('main').on('click', '#reset', function () {
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

$(handleQuiz);
