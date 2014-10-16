'use strict';

/**
 * @ngdoc filter
 * @name cursusangularApp.filter:done
 * @function
 * @description
 * # done
 * Filter in the cursusangularApp.
 */
angular.module('cursusangularApp')
  .filter('done', function () {
    return function (input) {
      var text  = '',
        i = 0;

      if(input === 0){
        return 'Let\'s do it! Go for it!';

      } else if(input === 1){
        return 'First one! Wh000t';

      } else if(input === 2){
        return 'Two done! Tadaa da, Tadaa da, Tadaa da';

      } else if(input === 3){
        return 'Thr33 done! RAMPAGE!!!';

      } else{
        text = input + ' done!';

        for(;i < input; i += 1){
          text += ' Let\'s party!';
        }

        return text;
      }
    };
  });
