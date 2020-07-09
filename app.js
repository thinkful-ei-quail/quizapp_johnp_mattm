'use strict';
/* eslint-env jquery */

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
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
  ],


  //this may be better off being moved to an entirely seperate object called state -JP
  
  
};
const state = [
  quizStarted = false,
  score = 0,
  questionIndex = 0
];
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
function generateStart(){
  $('main').empty();
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
function generateEnd(){
  $('main').empty();
  $('main').html(
    `<section id="endscreen" class="board_column_body">
        <div>
            <h2 class="finished">Thanks for playing</h2>
            <ul class="endul">
                <li class="incorrectanswer"><span>Score</span></li></ul>
            </ul>
        </div>
        <div>
            <button class="restart"><span>Try Again?</span></button>
        </div>
    </section>`
  );
  handleRestart();

}
//function generateScore(){show score show progress};
//function generateAnswer(){inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q};

/********** RENDER FUNCTION(S) **********/


//function render(){};
//function renderQuestion(){call generatequestion };
function renderStart(){
  generateStart();
}
//function renderAnswer(){call generateanswer }
function renderEnd(){                                                                                                
  generateEnd();
  handleRestart();
}
//function renderScore(){call generate score};

// these should  call the generator functions and be called by event handlers-JP


// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

function handleQuiz(){
  renderStart();
  handleStartSubmit();
  handleCorrect();
  handleWrong();
  handleRestart();
}
function handleStartSubmit(){
  $('.submit_start').on('click', function(){ 
    console.log('start button was pressed');
    
  }
  );
}
//function handleCorrect(){
//increment score push user to next question
//};
//function handleWrong(){};
//maybe play sound if wrong?
//function handleClickAnswer(){};
function handleRestart(){
  $('.restart').on('click',function(){
    handleQuiz();
  });
}
function handleEnd(){}

//these will call different generator functions for events including opening the page overall-JP


// These functions handle events (submit, click, etc)




//will start the intial html injection
$(renderEnd);
