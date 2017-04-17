(function (angular) {
    'use strict';

//
// Needs import in index.html to solve dependency 'ngSanitize'
//
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>
//

    var modul = angular.module('slidecastApp', ['ngSanitize']);

    modul.component('slidecast', {
        bindings: {
            titel: '@',
            slides: '<',
            slidesArrayName: '@'
        },
        templateUrl: '../framework/components/slidecast/slidecast.html',
        controller: function SlidecastController($window) {
            this.$onInit = function () {
                this.play = window.Play;
                this.alleFolien = window[this.slidesArrayName];
                this.slidesNavData = getSlidesNavData();
                this.slidesViewData = getSlidesViewData();
                this.folie = 0;
            };
            var vm = this;
            vm.getSlidesNavData = getSlidesNavData;
            vm.getSlidesViewData = getSlidesNavData;
            vm.getCurrentSlide = getCurrentSlide;
            vm.zeigeFolie = zeigeFolie;
            vm.getLastIndex = getLastIndex;
            vm.setzeAufFolie = setzeAufFolie;
            vm.setzeAufErsteFolie = setzeAufErsteFolie;
            vm.setzeAufLetzteFolie = setzeAufLetzteFolie;
            vm.setzeAufVorherigeFolie = setzeAufVorherigeFolie;
            vm.setzeAufNaechsteFolie = setzeAufNaechsteFolie;            

            vm.hallo = function (text) {
                alert('Master Hallo' + text);
            }

            function getSlidesNavData() {
                var result = [];
                vm.slides.forEach(function (item) {
                    result.push([item[0], item[1]]);
                });
                return result;
            }

            function getSlidesViewData() {
                var result = [];
                vm.slides.forEach(function (item) {
                    result.push([item[2], item[3], item[4] ]);
                });
                return result;
            }

            function getCurrentSlide() {
                return this.folie;
            }

            function zeigeFolie(folienIndex) {
                alert('Zeige Folie ' + folienIndex);
            }

            function getLastIndex() {
                return vm.slides.length - 1;
            }

            function setzeAufFolie(folienIndex) {
                vm.folie = folienIndex;
                vm.zeigeFolie(vm.folie);
            }

            function setzeAufErsteFolie() {
                vm.folie = 0;
                vm.zeigeFolie(vm.folie);
            }

            function setzeAufLetzteFolie() {
                vm.folie = vm.getLastIndex();
                vm.zeigeFolie(vm.folie);
            }

            function setzeAufVorherigeFolie() {
                var minIndex = 0;
                vm.folie--;
                if (vm.folie < minIndex) {
                    vm.folie = minIndex;
                }
                vm.zeigeFolie(vm.folie);
            }

            function setzeAufNaechsteFolie() {
                var lastIndex = vm.getLastIndex();
                vm.folie++;
                if (vm.folie > lastIndex) {
                    vm.folie = lastIndex;
                }
                vm.zeigeFolie(vm.folie);
            }

        }

    });

})(window.angular);