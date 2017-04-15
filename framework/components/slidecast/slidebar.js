(function (angular) {
  'use strict';

  var modul = angular.module('slidebarApp', []);

  modul.component('slidecast', {
    controller: function SlidecastController() {
      this.testLog = function testLog() {
        alert('Hallo log');
      }
    }

  });

  modul.component('slidebar', {
    templateUrl: '../framework/components/slidecast/slidebar.html',
    require: {
      container: '^slidecast'
    },
    controller: function SlidebarController() {
      var vm = this;
      vm.test = test;

      function test() {
        vm.container.testLog();
        //vm.geheZu();
      }
    },
    bindings: {
      geheZu: '&',
      slides: '<'
    }

  });


})(window.angular);