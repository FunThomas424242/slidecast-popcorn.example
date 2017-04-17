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
                this.folie = 0;
            };
            var vm = this;
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

            function getCurrentSlide(){
                return this.folie;
            }

            function zeigeFolie(folienIndex) {
                alert('Zeige Folie ' + folienIndex);
            }

            function getLastIndex() {
                return vm.slides.length - 1;
            }

            function setzeAufFolie( folienIndex ){
                vm.folie = folienIndex;
                vm.zeigeFolie( vm.folie );
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