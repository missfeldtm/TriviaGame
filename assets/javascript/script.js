//game questions

var questions = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',

    //questions 
    questions: {

        q1: 'What is Beyonc\'s Full Name?',
        q2: 'What is the name of Beyonce\'s groundbreaking album?',
        q3: 'Who is Beyonce\'s Cheating Husband?',
        q4: 'What music video did she release before the superbowl that caused an uproar?',
        q5: 'What song References "Becky with The Good Hair"?'
    },
    //answers user can choose from
    options: {
        q1: ['Beyoncé Giselle Knowles-Carter', 'Solange Piaget Knowles-Carter', 'Beyoncé Solange Knowles-Carter', 'Solange Beyoncé Knowles-Carter'],
        q2: ['Orange Soda', 'Apple Juice', 'Lemonade', 'Limeade'],
        q3: ['A$AP Ferg', '50 Cent', 'Nas', 'Jay-Z'],
        q4: ['Freedom', 'Formation', 'Sandcastles', '6'],
        q5: ['Sorry', 'Formation', 'Forward', 'Don\'t Hurt Yourself']
    },
    //answers to questions
    answers: {
        q1: 'Beyoncé Giselle Knowles-Carter',
        q2: 'Lemonade',
        q3: 'Jay-Z',
        q4: 'Formation',
        q5: 'Sorry',

    },

}

$(document).ready(function () {
    //when start button clicked

    //display first question

    //display timer





});

//generating questions

//pull from questions and options area in the object-array

//desigante a correct answer

//answering questions

//if user clicks on correct answer, alert user, display correct

//if wrong, alert user, and display correct answer

//go to next question


//when done answering, display right and wrong score




















/*
    <div class="col-md-12 text-center">
        <h4 id="question-current">What Is Beyonce's Full Name?</h4>

        <div id="choices-current">
            <p>Beyoncé Giselle Knowles-Carter</p>
            <p>Solange Piaget Knowles-Carter</p>
            <p>Beyoncé Solange Knowles-Carter</p>
            <p>Solange Beyoncé Knowles-Carter</p>
        </div>


    </div>

    'What is Beyonce\'s full name?'
['Beyoncé Giselle Knowles-Carter','Solange Piaget Knowles-Carter','Beyoncé Solange Knowles-Carter','Solange Beyoncé Knowles-Carter'
 */