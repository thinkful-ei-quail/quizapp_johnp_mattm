'use strict';
/* eslint-env jquery */

/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
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
    ],


    //this may be better off being moved to an entirely seperate object called state -JP
    quizStarted: false,
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
//function generateStart(){button that starts quiz};
//function generateEnd(){show score and button to restart};
//function generateScore(){show score show progress};
//function generateAnswer(){inject html with correct answer highlighted green and wrong answers highlighted red button to go to next q};

/********** RENDER FUNCTION(S) **********/


//function render(){};
//function renderQuestion(){call generatequestion };
//function renderStart(){call generatestart};
//function renderAnswer(){call generateanswer }
//function renderEnd(){call generate end};
//function renderScore(){call generate score};

// these should  call the generator functions and be called by event handlers-JP


  // This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function handle(){};
//function handleStart(){};
//function handleCorrect(){
    //increment score push user to next question
//};
//function handleWrong(){};
//maybe play sound if wrong?
//function handleClickAnswer(){};
//function hanldeReset(){};

//these will call different generator functions for events including opening the page overall-JP


  // These functions handle events (submit, click, etc)




  //will start the intial html injection
  //$(handleStart);
