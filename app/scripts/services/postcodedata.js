'use strict';

/**
 * @ngdoc service
 * @name pcd.factory
 * @description
 * # postcodedata
 * # http://www.postcodedata.nl/api/request/
 * Factory in the postcode.data.
 *
 */
angular.module('postcode.data', [])
  .factory('pcd.factory', ['$http', '$q', function ($http, $q) {
      console.info('pcb.factory: init');

      var url = 'http://api.postcodedata.nl/v1/postcode/?',
        query = [
          'type=json',
          'ref=localhost'
        ];

      function get (zipcode, address) {
          console.info('pcb.factory: get', zipcode, address);

          return $q(function(resolve, reject) {
            if (angular.isUndefined(zipcode) || angular.isUndefined(address)) {
              console.error('pcb.factory: param zipcode and/or address missing');
              reject();
            }

            var fullUrl = url;

            query.push('postcode=' + zipcode);
            query.push('streetnumber=' + address);

            fullUrl += query.join('&');

            console.info('pcb.factory: fullUrl', fullUrl);

            $http.get(fullUrl)
              .success(function(data) {
                console.log('pcb.factory', data);

                var status = data.status;

                if(status === 'ok'){
                  resolve(data);

                } else if(status === 'error'){
                  console.error('pcb.factory:', data);

                  reject(data);
                }

              })
              .error(function(error) {
                console.error('pcb.factory:', error);

                reject(error);
              });
          });
      }

      return {
        get: get
      };
    }]);
