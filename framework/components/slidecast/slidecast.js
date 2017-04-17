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
            this.$onInit = function () {
                this.alleMedien = window[this.mediaArrayName];
                this.alleFolien = window[this.slidesArrayName];
            };
            var vm = this;
            vm.zeigeFolie = zeigeFolie;
            vm.getLastIndex = getLastIndex;


            vm.hallo = function (text) {
                alert('Master Hallo' + text);
            }

            function getLastIndex() {
                return vm.slides.length - 1;
            }

            function zeigeFolie(folienIndex) {
                alert('Zeige Folie ' + folienIndex);
            }
        }

    });

})(window.angular);