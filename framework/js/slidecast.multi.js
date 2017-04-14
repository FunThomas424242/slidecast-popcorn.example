var AllSlides = "" ;
 
function LoadSlide(slidenum){
    AllSlides.eq(slidenum).show();
}

function HideSlide(slidenum){
    AllSlides.eq(slidenum).hide();

}

$(function(){
    AllSlides = $(".presentation .slide");
    AllSlides.hide();
    AllSlides.vAlign();
})  ;

function show( slidenum ){
    AllSlides.hide();
    AllSlides.vAlign();
    var audioID = 'audio'+slidenum;
    $( 'audio' ).attr("id",audioID);
    var testID = $( 'audio').attr("id");

    var audioSrc = SlideTiming[ slidenum ][ 3 ];
    $( '#mp3' ).attr("src",audioSrc);
    var testSRC = $( '#mp3').attr("src");
    play( slidenum );
}

function play( slidenum ){
    var popcorn = Popcorn( '#audio'+slidenum );
    popcorn.slide({
            start: 0, // seconds
            end: 6, // seconds
            slidenum: slidenum
        });
    popcorn.play();
}
