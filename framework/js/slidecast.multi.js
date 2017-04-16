var AllSlides = "" ;
 
function LoadSlide(slidenum){
    AllSlides.eq(slidenum).show();
}

function HideSlide(slidenum){
    AllSlides.eq(slidenum).hide();

}

$(function(){
    AllSlides = $(".folien .slide");
    AllSlides.hide();
    AllSlides.vAlign();
    AllMedia = $("audio");
    AllMedia.hide();
})  ;

function show( slidenum ){
    AllSlides.hide();
    AllMedia.hide();
    $( '#' + SlideTiming[ slidenum ][ 3 ] ).show();
    play( slidenum );
}

function play( slidenum ){
    var i = slidenum;
    var popcorn = Popcorn( '#'+SlideTiming[i][3]);
    popcorn.slide({
            start: 0, // seconds
            end: SlideTiming[i][2] +1, // seconds
            slidenum: slidenum
        });
    popcorn.play();
}

