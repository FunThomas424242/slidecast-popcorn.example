var AllSlides = "" ;
 
function LoadSlide(slidenum){
    AllSlides.eq(slidenum).show();
}

function HideSlide(slidenum){
    AllSlides.eq(slidenum).hide();

}

// $(function(){

//     AllSlides = $(".presentation .slide");
//     AllSlides.hide();
//     AllSlides.vAlign();
   
//     var popcorn;
//     for (var i = 0; i < SlideTiming.length; i++){ 
//         popcorn = Popcorn( '#'+SlideTiming[i][3]);
//         popcorn.slide({
//             start: SlideTiming[i][1], // seconds
//             end: SlideTiming[i][2], // seconds
//             slidenum: SlideTiming[i][0]
//         })  
//         popcorn.play();
//     }   
// })  ;

$(function(){

    AllSlides = $(".presentation .slide");
    AllSlides.hide();
    AllSlides.vAlign();
    AllMedia = $("audio");
    AllMedia.hide();
})  ;

function show( slidenum ){
    AllMedia.hide();
    $( '#' + SlideTiming[ slidenum ][ 3 ] ).show();
    play( slidenum );
}

function play( slidenum ){
    var i = slidenum;
    var popcorn = Popcorn( '#'+SlideTiming[i][3]);
    popcorn.slide({
            start: SlideTiming[i][1], // seconds
            end: SlideTiming[i][2], // seconds
            slidenum: SlideTiming[i][0]
        });
    popcorn.play();
}
