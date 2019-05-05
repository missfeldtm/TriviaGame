//game questions

$(document).ready(function () {

    // event listeners

    $("#start-btn").on('click', gamePlay.start);

    $(document).on('click', '.option', gamePlay.grader);
    $('.container').on('click', '#game-reset', function () {
        console.log('clicked');
    });

})

var gamePlay = {
    // game settings
    answersCorrect: 0,
    answersIncorrect: 0,
    unanswered: 0,
    //changes set of questions
    currentSet: 0,

    //questions 
    questions: {

        q1: 'What is Beyonce\'s Full Name?',
        q2: 'What is the name of Beyonce\'s groundbreaking album?',
        q3: 'Who is Beyonce\'s Husband?',
        q4: 'What was the First Song Beyonce Released from Her Groundbreaking Album Lemonade?',
        q5: 'Which song References "Becky with The Good Hair"?'
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

    //game start
    start: function () {

        //set everything to 0
        gamePlay.answersCorrect = 0;
        gamePlay.answersIncorrect = 0;
        gamePlay.unanswered = 0;
        gamePlay.currentSet = 0;

        $('#start-btn').hide();

        gamePlay.generateQuestion();

    },


    generateQuestion: function () {

        var h2 = $("<h2>");
        var questionContainer = '<div class="mouseover">';
        var questionContent = Object.values(gamePlay.questions)[gamePlay.currentSet];
        var options = Object.values(gamePlay.options)[gamePlay.currentSet];

        //timer options
        gamePlay.time = 10;
        this.run();

        if (gamePlay.currentSet === Object.keys(gamePlay.questions).length) {

            // adds results of game (correct, incorrect, unanswered) to the page
            $('.game-main')
                .html(
                    '<p>Correct: ' + gamePlay.answersCorrect + '</p>' +
                    '<p>Incorrect: ' + gamePlay.answersIncorrect + '</p>' +
                    '<p>Unaswered: ' + gamePlay.unanswered + '</p>' +
                    '<button id="game-reset"> Play Again? </button>');

            return;
        }

        //display question 1
        h2.addClass('main-q');
        h2.text(questionContent);

        //generates Options
        for (var i = 0; i < options.length; i++) {

            questionContainer += '<p class="option">' + options[i] + '</p>';

        }

        $("#question-container").html(h2);
        $("#option-container").html(questionContainer);

    },

    grader: function (decision, answer) {

        var answerKey = Object.values(gamePlay.answers)[gamePlay.currentSet];

        var txt = $(this).text();

        console.log(txt);

        if (txt === answerKey) {

            gamePlay.answersCorrect++;

            gamePlay.currentSet++;
            gamePlay.generateQuestion();

        } else {

            gamePlay.answersIncorrect++;
            console.log(gamePlay.answersIncorrect);
            gamePlay.currentSet++;
            gamePlay.generateQuestion();

        }
        gamePlay.stop();

    },


    //timer settings
    time: 10,
    clockRunning: false,
    timerId: '',
    intervalId: 0,

    decrement: function () {
        var convertTime = gamePlay.timeConverter(gamePlay.time);
       

        gamePlay.time--;

        $("#timer").text(convertTime);

        if (gamePlay.time == 0) {

            gamePlay.unanswered ++;

            console.log(gamePlay.unanswered);

            gamePlay.stop();




        }
    },


    run: function () {
        gamePlay.intervalId = setInterval(gamePlay.decrement, 1000);
    },


    timeConverter: function (t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return t;

    },
    stop: function () {

        clearInterval(gamePlay.intervalId);

       
    }
}






/* $(document).ready(function () {
    //when start button clicked

    $('button').on('click', function () {

        generateQuestion(gamePlay.questions.q1, gamePlay.options.q1);

    })

    $('.game-main').on('click','.option', function () {

        //grabs text from html
        var txt = $(this).text();

        gradeAnswer(txt,gamePlay.answers.q1);
        generateQuestion(gamePlay.questions.q2, gamePlay.options.q2);

        

    })

}); */



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