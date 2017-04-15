(function (angular) {
  'use strict';

  var modul = angular.module('slidebarApp', []);

  angular.module('slidebarApp')
    .component('slidecast', {

      controller: function () {
        var vm = this;
        vm.testLog = testLog;

        function testLog() {
          alert('Hallo log');
        }
      }

    });

  angular.module('slidebarApp')
    .component('slidebar', {
      templateUrl: '../framework/components/slidecast/slidebar.html',
      controller: 'SlidebarController',
      bindings: {
        geheZu: '&',
        slides: '<'
      }
    })
    .controller('SlidebarController', function () {
      var vm = this;
      vm.test = test;

      function test() {
        this.container.testLog();
        //vm.geheZu();
      }
    });




})(window.angular);