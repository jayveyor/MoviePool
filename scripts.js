
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




//button presses for start button and replay button

$('.start').on('click', function () {
    window.location = 'quiz.html';
});

$('.reload').on('click', function () {
    window.location.reload();
});

for (let i = 0; i < 4; i++) {
 const items;
    items = [
        'tt4975722', 'tt1895587', 'tt2562232'
    ];

    let item;

    item = items[Math.floor(Math.random() * items.length)]; 

     movieCall();

      function movieCall() {

        return $.ajax({
            method: 'GET',
            url: 'https://www.omdbapi.com/',
            dataType: 'jsonp',
            data: {
                //apikey: '9aa522e',
                apikey: 'e4a75d0b',
                i: item,
            }
        }).then(function (res) {
            //check output and print to screen
            
                ifPosterExist(res);
        });
    }

    const ifPosterExist = function (data) {
       
          //adds poster to container
          $(`.poster${i}`).attr('src', `${data.Poster}`);

          //add title
          $(`.title${i}`).append(`<h4 class="title${i}">${data.Title}</h4>`);

          //add director
          $(`.director${i}`).append(`<h4 class="director${i}">${data.Director}</h4>`);

          //add year
          $(`.year${i}`).append(`<h4 class="year${i}">${data.Year}</h4>`);

          //add runtime
          $(`.runtime${i}`).append(`<h4 class="runtime${i}">${data.Runtime}</h4>`);        
    }

}