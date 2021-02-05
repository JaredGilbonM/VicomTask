/*@Written by Jared Gilbón*/

/*Document on ready*/
$(() => {
    getData();
    plusLessHandler();
});

let phrase = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

/*Get data from API*/
getData = () =>{
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/2",
        data: {},
        type: "GET",
        beforeSend: function(){
        },
        complete: function(){  
        },
        success: function(rs){
            $('.body__characterDesc--img').append('<img src ="' + rs.image + '" class = "body__dynamicImg">');
            $('.body__getName').append(": " + rs.name);   
            $('.body__getGender').append(": " + rs.gender); 
            for(let i = 1; i <= 5; i++){
                $.ajax({
                    url: "https://rickandmortyapi.com/api/episode/" + i,
                    data: {},
                    type: "GET",
                    async: false,
                    beforeSend: function(){
                    },
                    complete: function(){  
                    },
                    success: function(rs){
                        $('.getTop5Episodes').append(rs.name + ", ");
                    },
                    error: function(){
                    }
                })
            }          
        },
        error: function(){
        }
    });
}

/*Gesture icon changes and paragraph content on click*/
plusLessHandler = () => {
    $('body').on('click', '.body__div--1', () =>{
        $('.body__p--1').html(phrase)
        $('.body__p--2').html("");
        $('.body__p--3').html("");
        $('.body__question--oneplus').css('display', 'none');
        $('.body__question--oneless').css('display', 'flex');
        $('.body__question--twoplus').css('display', 'flex');
        $('.body__question--twoless').css('display', 'none');
        $('.body__question--threeplus').css('display', 'none');
        $('.body__question--threeless').css('display', 'flex');
    });

    $('body').on('click', '.body__div--2', () =>{
        $('.body__p--1').html("");
        $('.body__p--2').html(phrase)
        $('.body__p--3').html("");
        $('.body__question--oneplus').css('display', 'flex');
        $('.body__question--oneless').css('display', 'none');
        $('.body__question--twoplus').css('display', 'none');
        $('.body__question--twoless').css('display', 'flex');
        $('.body__question--threeplus').css('display', 'none');
        $('.body__question--threeless').css('display', 'flex');
    });

    $('body').on('click', '.body__div--3', () =>{
        $('.body__p--1').html("");
        $('.body__p--2').html("");
        $('.body__p--3').html(phrase)
        $('.body__question--oneplus').css('display', 'flex');
        $('.body__question--oneless').css('display', 'none');
        $('.body__question--twoplus').css('display', 'flex');
        $('.body__question--twoless').css('display', 'none');
        $('.body__question--threeplus').css('display', 'flex');
        $('.body__question--threeless').css('display', 'none');
    });
}