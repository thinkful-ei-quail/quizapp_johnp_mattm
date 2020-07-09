'use strict';
/* eslint-env jquery */

/**
 * Example store structure
 */
const questions =
    // 5 or more questions are required
    [
        {
            question: 'What color is broccoli?',
            answers: [
                'red',
                'orange',
                'pink',
                'green'
            ],
            correctAnswer: 'green',
            answered: false
        },
        {
            question: 'What is the current year?',
            answers: [
                '1970',
                '2015',
                '2019',
                '2005'
            ],
            correctAnswer: '2019',
            answered: false
        }
    ]

const state = [
    //this may be better off being moved to an entirely seperate object called state -JP
    quizStarted = false,
    questionIndex = 0,
    score = 0
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
function generateQuestion(randomQuestionIndex) {//inject html with question and buttons for answers
    $("main").html(`
<div>
    <h2 class="questiontext">${questions[state.questionIndex].question}</h2>
    <form class="answercontainer">
        <ul>
            <li class="answer_button"><button type="button"><label>${questions[state.questionIndex].answers[randomAnswerIndex]}</span></button></li>
            <li class="answer_button"><button type="button"><span>${questions[state.questionIndex].answers[randomAnswerIndex]}</span></button></li>
            <li class="answer_button"><button type="button"><span>${questions[state.questionIndex].answers[randomAnswerIndex]}</span></button></li>
            <li class="answer_button"><button type="button"><span>${questions[state.questionIndex].answers[randomAnswerIndex]}</span></button></li>
        </ul>
    </form>
</div>`
        //<div><button type="submit"><span>Submit</span></button>
        //</div>`
    );
};
//function generateStart(){button that starts quiz};-MM
function generateEnd() {//show score and button to restart-MM
    $("main").html(`
    <section id="endscreen" class="board_column_body">
            <div>
                <h2 class="finished">Thanks for playing</h2>
                <ul class="endul">
                    <li class="finalscore"><span>Score</span></li></ul>
                </ul>
            </div>
            <div>
            <button type="reset"><span>Try Again?</span></button>
            </div>
        </section>
    `);
};

function generateScore() {//show score show progress
    $("main").html(`<section id="scoreboard">
    <div id="scoreboard_div">
        <ul id="scoreboard_ul">
            <li id="scoreboard_li"><span>Score:</span></li>
            <li id="scoreboard_li"><span>Progress:</span></li>
        </ul>
    </div>
</section>`);
};

function generateCorrectAnswer() {//inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q
    $("main").html(` <section id="correct" class="board_column_body">
<div>
    <h2 id="correct">How did you know that?</h2>
    <ul id="correct">
        <li id="correct"><span>Correct Answer</li>
    </ul>
</div>
<div>
    <button id="correct" type="submit"><span>Next</span></button>
</div>
</section>`)
};

function generateIncorrectAnswer(){//inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q
    $("main").html(`<section id="incorrect" class="board_column_body">
    <div id="incorrect">
        <h2 id="incorrect" class="gotitwrong">Go read the lore, noob.</h2>
        <ul id="incorrect" class="incorrectanswerul">
            <li id="incorrect" class="incorrectanswer"><span>Correct Answer</li>
        </ul>
    </div>
    <div>
        <button id="incorrect" type="submit"><span>Next</span></button>
    </div>
</section>`
    )
};

/********** RENDER FUNCTION(S) **********/


//function render(){};
function renderQuestion() {
    $("main").empty();
    generateQuestion();
};

//function renderStart(){call generatestart};-MM

function renderCorrectAnswer(){//call generateanswer
    $("main").empty();
    state.questionIndex = state.questionIndex + 1;
    state.score = state.score + 1;
    generateCorrectAnswer();
};

function renderIncorrectAnswer(){//call generateanswer
    $("main").empty();

    generateIncorrectAnswer();
};

function renderEnd() {//call generate end-MM
    $("main").empty();
    generateEnd()
};

function renderScore() {//call generate score
    $("main").empty();
    generateScore();
};

// these should  call the generator functions and be called by event handlers-JP


  // This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function handleQuiz(){};--MM
//function handleStart(){};--MM
function handleCorrectAnswer(){
    $(".answer_button").on("submit",function(){
        if("label".val()===questions[state.questionIndex].correctAnswer){
            renderCorrectAnswer();

        }
    })
    //increment score push user to next question
};
//function handleWrong(){};
//maybe play sound if wrong?
//funcntion handleEnd(){}
//function hanldeReset(){};

//these will call different generator functions for events including opening the page overall-JP


  // These functions handle events (submit, click, etc)




  //will start the intial html injection
  $(handleQuiz);
