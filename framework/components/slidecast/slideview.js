(function (angular) {
    'use strict';

    var modul = angular.module('slidecastApp');

    modul.component('slideview', {
        bindings: {
            slidesdata: '<',
            index: '<',
            titel: '@',
            slide: '<',
            callback: '&'
        },
        templateUrl: '../framework/components/slidecast/slideview.html',
        controller: function SlideviewController() {            
            var vm = this;
            

            vm.start = function(){
                alert('Böse: '+vm.titel);
                vm.callback({text: 'Blup'});
            }

            vm.getAudioId = function ( slideIndex ){
                return vm.slidesdata[ slideIndex ][1];
            }

            vm.getAudioSrc = function (slideIndex ){
                return vm.slidesdata[ slideIndex ][2];
            }

        }
    });


})(window.angular);


