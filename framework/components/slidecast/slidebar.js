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
    
      aktivieren();

      function aktivieren() {
        
      }

      function testLog( value ) {
        alert('Zeige Folie ' + value);
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