
$("h4").draggable({
    snap: ".answercont",
    snapMode: "inner",
    snapTolerance: 30,
    revert: "invalid"
});
$(".answerslot").droppable({
    accept: "",
    drop: function (event, ui) {
        $(this)
            .addClass("correct")
    }
});


$(".movie1answer1slot").droppable({
    accept: ".title1",
});

$(".movie1answer2slot").droppable({
    accept: ".year1",
});

$(".movie1answer3slot").droppable({
    accept: ".director1",
});

$(".movie1answer4slot").droppable({
    accept: ".runtime1",
});

$(".movie2answer1slot").droppable({
    accept: ".title2",
});

$(".movie2answer2slot").droppable({
    accept: ".year2",
});

$(".movie2answer3slot").droppable({
    accept: ".director2",
});

$(".movie2answer4slot").droppable({
    accept: ".runtime2",
});

$(".movie3answer1slot").droppable({
    accept: ".title3",
});

$(".movie3answer2slot").droppable({
    accept: ".year3",
});

$(".movie3answer3slot").droppable({
    accept: ".director3",
});

$(".movie3answer4slot").droppable({
    accept: ".runtime3",
});

//function to star pushing characters to be typed


//button presses for start button and replay button

$('.start').on('click', function () {
    window.location = 'quiz.html';
});

$('.reload').on('click', function () {
    window.location.reload();
});

for (let i = 0; i < 4; i++) {
    movieCall();

    //function for calling api to get movie info from random 7 digit string
    function movieCall() {

        return $.ajax({
            method: 'GET',
            url: 'https://www.omdbapi.com/',
            dataType: 'jsonp',
            data: {
                //apikey: '9aa522e',
                apikey: 'e4a75d0b',
                i: `tt1825683`,
            }
        }).then(function (res) {
            //check output and print to screen
            
                ifPosterExist(res);
        });

    }

    const ifPosterExist = function (data) {
       
        console.log('hello')
            //adds poster to container
            $(`.poster1`).attr('src', `${data.Poster}`);

            //add title
            $(`.title1`).append(`<h4 class="title1">${data.Title}</h4>`);

            //add director
            $(`.director1`).append(`<h4 class="director1">${data.Director}</h4>`);

            //add year
            $(`.year1`).append(`<h4 class="year1">${data.Year}</h4>`);

            //add runtime
            $(`.runtime1`).append(`<h4 class="runtime1">${data.Runtime}</h4>`);


        
    }

}