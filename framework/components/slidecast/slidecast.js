(function (angular) {
    'use strict';

    var modul = angular.module('slidecastApp', []);

    modul.component('slidecast', {
        bindings: {
            titel: '@',
            slides: '<'
        },
        templateUrl: '../framework/components/slidecast/slidecast.html',
        controller: function SlidecastController() {
            var vm = this;
            vm.zeigeFolie = zeigeFolie;
            vm.getLastIndex = getLastIndex;

            this.hallo = function (text) {
                alert("Titel: "+this.titel);
                alert('Master Hallo' + text);
            }

            function getLastIndex() {
                return this.slides.length - 1;
            }

            function zeigeFolie(folie) {
                alert('Zeige Folie ' + folie);
            }
        },

    });

})(window.angular);