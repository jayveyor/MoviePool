
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

$('.reload').on('click', function () {
    location.reload();
});

for (let i = 0; i < 4; i++) {
 const items = [
        'tt4975722', 'tt1895587', 'tt2562232', 'tt2024544', 'tt1655442', 'tt1504320', 'tt0887912', 'tt1010048', 'tt0477348', 'tt0407887', 'tt0375679', 'tt0405159', 'tt0167260', 'tt0299658', 'tt0268978', 'tt0172495', 'tt0169547', 'tt0138097', 'tt0120338', 'tt0116209', 'tt0112573', 'tt0109830', 'tt0108052', 'tt0105695', 'tt0102926', 'tt0099348', 'tt0097239', 'tt0095953', 'tt0093389', 'tt0091763', 'tt0089755', 'tt0086879', 'tt0086425', 'tt0083987', 'tt0082158', 'tt0081283', 'tt0079417', 'tt0077416', 'tt0075686', 'tt0075148', 'tt0073486', 'tt0071562', 'tt0070735', 'tt0068646', 'tt0067116', 'tt0066206', 'tt0064665', 'tt0063385', 'tt0061811', 'tt0060665', 'tt0059742', 'tt0058385', 'tt0057590', 'tt0056172', 'tt0055614', 'tt0053604', 'tt0052618', 'tt0051658', 'tt0050212', 'tt0048960', 'tt0048356', 'tt0047296', 'tt0045793', 'tt0043278', 'tt0042192', 'tt0041113', 'tt0040416', 'tt0039416', 'tt0036868', 'tt0037884', 'tt0036872', 'tt0034583', 'tt0035093', 'tt0033729', 'tt0032976', 'tt0031381', 'tt0030993', 'tt0029146', 'tt0027698', 'tt0026752', 'tt0025316', 'tt0023876', 'tt0022958', 'tt0021746', 'tt0020629', 'tt0019729', 'tt0018578', 'tt0018455'
    ];

   let item = items[Math.floor(Math.random() * items.length)]; 

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