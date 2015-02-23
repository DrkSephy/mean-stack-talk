var gitApp = angular.module('gitApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('issues', {
            url: '/issues',
            templateUrl: 'partials/issues.partial.html',
            controller: 'issuesController',
            data: {
                pageTitle: 'Issues'
            }
        });
});
