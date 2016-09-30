(function(){
    'use strict';
    angular 
        .module('kurukshetra')
        .controller('WorkshopsController', WorkshopsController);
    WorkshopsController.$inject = ['$state', '$scope', '$interval'];
    function WorkshopsController(state, scope, interval){
        var ctrl = this;
        ctrl.title = "Workshops Page";
    }
    
})();