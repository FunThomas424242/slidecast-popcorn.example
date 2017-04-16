(function (angular) {
    'use strict';

    var modul = angular.module('slidecastApp', []);

    modul.component('slidecast', {
        bindings: {
            titel: '@',
            slides: '<',
            mediaArrayName: '@',
            slidesArrayName: '@'
        },
        templateUrl: '../framework/components/slidecast/slidecast.html',
        controller: function SlidecastController($window) {
            var vm = this;
            vm.zeigeFolie = zeigeFolie;
            vm.getLastIndex = getLastIndex;



            this.hallo = function (text) {
                alert('Master Hallo' + text);
                vm.alleMedien = window[this.mediaArrayName];
                vm.alleFolien = window[this.slidesArrayName];

            }

            function getLastIndex() {
                return this.slides.length - 1;
            }

            function zeigeFolie(folie) {
                alert('Zeige Folie ' + folie);
            }
        }

    });

})(window.angular);