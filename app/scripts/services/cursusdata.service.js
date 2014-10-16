'use strict';

/**
 * @ngdoc service
 * @name cursusangularApp.cursusdata.service
 * @description
 * # cursusdata.service
 * Factory in the cursusangularApp.
 */
angular.module('cursusangularApp')
    .factory('cursusdata.service', function() {
        var list = [
            [{
                title: 'Init',
                done: false
            }, {
                title: 'Two-way data binding',
                done: false
            }, {
                title: 'Dependency injection',
                done: false
            }, {
                title: 'Module',
                done: false
            }, {
                title: 'Controllers',
                done: false
            }, {
                title: 'View/template',
                done: false
            }, {
                title: 'Expressions',
                done: false
            }, {
                title: '$scope',
                done: false
            }, {
                title: 'Directive',
                done: false
            }, {
                title: 'Ng-',
                done: false
            }, {
                title: 'Link',
                done: false
            }, {
                title: 'Controller',
                done: false
            }, {
                title: 'Route',
                done: false
            }, {
                title: 'Services',
                done: false
            }, {
                title: 'Factory',
                done: false
            }, {
                title: 'Provider',
                done: false
            }, {
                title: 'Service',
                done: false
            }, {
                title: 'Constant',
                done: false
            }, {
                title: 'Value',
                done: false
            }, {
                title: 'Filters',
                done: false
            }, {
                title: 'In template',
                done: false
            }, {
                title: 'In controller',
                done: false
            }, {
                title: 'Forms',
                done: false
            }, {
                title: 'Name attribute',
                done: false
            }, {
                title: '$dirty/$invalid',
                done: false
            }, {
                title: 'Ng-model',
                done: false
            }, {
                title: '$http/$resource',
                done: false
            }, {
                title: 'Strict contextual escaping (SCE)',
                done: false
            }, {
                title: 'Mock/$httpBackend',
                done: false
            }, {
                title: 'Unittesting',
                done: false
            }, {
                title: 'E2E',
                done: false
            }]
        ];

        function getItemsOfIndex(index) {
            return list[index];
        }

        function itemsToNextIndex(index, currentList) {
            var nextList = [];

            angular.forEach(currentList, function(item) {
                if (item.done === false) {
                    this.push(item);
                }
            }, nextList);

            list[index] = nextList;
        }

        return {
            getItemsOfIndex: getItemsOfIndex,
            itemsToNextIndex: itemsToNextIndex
        };
    });
