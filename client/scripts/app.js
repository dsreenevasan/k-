(function(){
    'use strict';

    var states = [
        {
            name: 'home',
            state:
            {
                url:'/home',
                templateUrl: 'views/home.html',
                data: {
                    text: "Home",
                    visible: false
                }
            }
        },
        {
            name: 'workshops',
            state:
            {
                url:'/workshops',
                templateUrl: 'views/workshops.html',
                data: {
                    text: "Workshops",
                    visible: false
                }
            }
        },
        {
            name: 'events',
            state:
            {
                url:'/events',
                templateUrl: 'views/events.html',
                data: {
                    text: "Events",
                    visible: false
                }
            }
        }
    ];

    var app = angular.module('kurukshetra', [
        'ui.router'
    ]);


    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        angular.forEach(states, function(state) {
            $stateProvider.state(state.name, state.state);
        });
    });
    
})();