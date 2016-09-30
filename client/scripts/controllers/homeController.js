(function(){
    'use strict';
    angular
        .module('kurukshetra')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope', '$state', '$interval'];
    function HomeController($scope, $state, $interval){
        var ctrl = this;

        ctrl.stateChange = function(state){
            $state.go(state);
        }
    }
})();