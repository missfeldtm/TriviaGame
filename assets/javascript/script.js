//game questions

$(document).ready(function () {

    // event listeners

    $(document).on('click','#start-btn', gamePlay.start);

    $(document).on('click', '.option', gamePlay.grader);

    $(document).on('click', '#next-btn', gamePlay.generateQuestion);

    $(document).on('click', '#game-reset', gamePlay.gameReset);

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
        q4: 'What was the First Song Beyonce Released from Her Masterpiece Album Lemonade?',
        q5: 'Which song References "Becky with The Good Hair"?',
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
    gifs: {
        q1: 'beyonce.gif',
        q2: 'lemonade.gif',
        q3: 'smash.gif',
        q4: 'formation.gif',
        q5: 'becky.gif',

    },

    //game start
    start: function () {

        //set everything to 0
        gamePlay.answersCorrect = 0;
        gamePlay.answersIncorrect = 0;
        gamePlay.unanswered = 0;
        gamePlay.currentSet = 0;
        clearInterval(gamePlay.timerId);

        $('#start-btn').hide();

        gamePlay.generateQuestion();

    },

    gameReset: function(){

        $('.game-main').html('<button type="button" class="btn btn-primary" id="start-btn">Start</button><div id="question-container"></div><div id="option-container"></div>');


    },


    generateQuestion: function () {

        var h2 = $("<h2>");
        var questionContainer = '<div class="mouseover">';
        var questionContent = Object.values(gamePlay.questions)[gamePlay.currentSet];
        var options = Object.values(gamePlay.options)[gamePlay.currentSet];

        $("#question-container").show();
        $("#option-container").show();

        $("#panel").slideUp();

        //timer options
        gamePlay.time = 10;
        gamePlay.run();

        if (gamePlay.currentSet === Object.keys(gamePlay.questions).length) {

            gamePlay.stop();
            $('#timer').hide();

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

    grader: function () {

        var answerKey = Object.values(gamePlay.answers)[gamePlay.currentSet];

        var txt = $(this).text();

        var gifShow = Object.values(gamePlay.gifs)[gamePlay.currentSet];

        console.log(txt);

        if (txt === answerKey) {

            gamePlay.answersCorrect++;

            gamePlay.currentSet++;
            $('.q-status').html('<p> Correct! </p>');
            $('.q-image').html('<img src="assets/images/' + gifShow + '">');



        } else {

            gamePlay.answersIncorrect++;
            console.log(gamePlay.answersIncorrect);
            gamePlay.currentSet++;

            $('.q-status').html('<p> Incorrect! The Correct Answer was ' + answerKey + '</p>');
            $('.q-image').html('<img src="assets/images/' + gifShow + '">');


        }
        gamePlay.stop();
        $("#question-container").hide();
        $("#option-container").hide();

        $("#panel").slideDown("slow");



    },


    //timer settings
    time: 10,
    clockRunning: false,
    timerId: '',
    intervalId: 0,

    decrement: function () {
        var convertTime = gamePlay.timeConverter(gamePlay.time);

        var answerKey = Object.values(gamePlay.answers)[gamePlay.currentSet];

        var txt = $(this).text();
        var gifShow = Object.values(gamePlay.gifs)[gamePlay.currentSet];


        gamePlay.time--;

        $("#timer").text(convertTime);

        if (gamePlay.time == 0) {

            gamePlay.unanswered++;


            gamePlay.stop();


            
            $('.q-status').html('<p> You Ran Out Of Time! The Correct Answer was ' + answerKey + '</p>');
            $('.q-image').html('<img src="assets/images/' + gifShow + '">');
            $("#panel").slideDown("slow");

            gamePlay.currentSet++;



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


