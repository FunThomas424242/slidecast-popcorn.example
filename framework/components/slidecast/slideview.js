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
            var vm = this;

            vm.start = function(){
                alert('Böse: '+vm.titel);
                vm.callback({text: 'Blup'});
            }

        }
    });


})(window.angular);


