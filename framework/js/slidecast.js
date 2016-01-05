   
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
    var popcorn = Popcorn( "#audiofile" );

    for (var i = 0; i < SlideTiming.length; i++){ 
        popcorn.slide({
            start: SlideTiming[i][1], // seconds
            end: SlideTiming[i][2], // seconds
            slidenum: SlideTiming[i][0]
        })  
    }   
    popcorn.play();
})  ;
