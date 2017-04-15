(function (angular) {
  'use strict';

  var modul = angular.module('slidebarApp', []);

  modul.component('slidecast', {
    bindings: {
      slides: '<'
    },
    controller:  function SlidecastController() {
      var vm = this;
      vm.testLog = testLog;
      vm.aktivieren = aktivieren;
      vm.timing =
          [
            ['Vorspann', 0, 6, 'vorspann'],
            ['Folie 1', 0, 3, 'folie1'],
            ['Folie 2', 0, 3, 'folie2'],
            ['Folie 3', 0, 2, 'folie3']
          ];

      aktivieren();

      function aktivieren() {
        
      }

      function testLog() {
        alert('Hallo log');
      }
    },

  });

  modul.component('slidebar', {
    templateUrl: '../framework/components/slidecast/slidebar.html',
    require: {
      container: '^slidecast'
    },
    controller: function SlidebarController() {
      var vm = this;
      vm.aktivieren = aktivieren;

      aktivieren();

      function aktivieren(){

      }
    }

  });


})(window.angular);