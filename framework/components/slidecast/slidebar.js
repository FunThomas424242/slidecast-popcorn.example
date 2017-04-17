(function (angular) {
  'use strict';

  var modul = angular.module('slidecastApp');

  modul.component('slidebar', {
    bindings: {
      first: '<',
      prev: '<',
      next: '<',
      last: '<',
      onFirst: '&',
      onLast: '&',
      onPrev: '&',
      onNext: '&',
      onSelect: '&',
      onChange: '&'
    },
    require: {
      container: '^slidecast'
    },
    templateUrl: '../framework/components/slidecast/slidebar.html',
    controller: function SlidebarController() {
      this.$onInit = function () {
        this.folie = 0;
      };
      var vm = this;
      vm.folie = 0;
      vm.goToFirst = goToFirst;
      vm.goToLast = goToLast;
      vm.goToPrev = goToPrev;
      vm.goToNext = goToNext;
      vm.goToSelection = goToSelection;


      function goToFirst() {
        vm.onFirst();
        vm.folie = vm.onChange();
      }

      function goToLast() {
        vm.onLast();
        vm.folie = vm.onChange();
      }

      function goToPrev() {
        vm.onPrev();
        vm.folie = vm.onChange();
      }

      function goToNext() {
        vm.onNext();
        vm.folie = vm.onChange();
      }

      function goToSelection(nr) {
        vm.onSelect({ folienIndex: nr });
      }

    }

  });




})(window.angular);