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
    var audioSrc = SlideTiming[ slidenum ][ 3 ];
    $( '#mp3' ).src = audioSrc;
    play( slidenum );
}

function play( slidenum ){
    var i = slidenum;
    var popcorn = Popcorn( '#audio' );
    popcorn.slide({
            start: SlideTiming[i][1], // seconds
            end: SlideTiming[i][2], // seconds
            slidenum: SlideTiming[i][0]
        });
    popcorn.play();
}
