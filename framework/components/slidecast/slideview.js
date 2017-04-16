(function (angular) {
    'use strict';

    var modul = angular.module('slidecastApp');

    modul.component('slideview', {
        bindings: {
            index: '<',
            titel: '@',
            callback: '&'
        },
        templateUrl: '../framework/components/slidecast/slideview.html',
        controller: function SlideviewController() {

            this.testCall = function(){
                alert('Böse: '+this.titel);
                this.callback({text: 'Blup'});
            }

        }
    });


})(window.angular);


