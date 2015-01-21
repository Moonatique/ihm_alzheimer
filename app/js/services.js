/**
 * Created by moonatique on 1/11/15.
 */
var services = angular.module('ihm_alzheimer_services', ['ngResource']);

services.factory('Album', ['$resource',
    function($resource){
        return $resource('content/album/:albumId.json', {}, {
            query: {method:'GET', params:{albumId:'albums'}, isArray:true}
        });
    }])
.factory('Sticker', ['$resource',
    function($resource){
        return $resource('content/album/:stickerId.json', {}, {
            query: {method:'GET', params:{stickerId:'stickers'}, isArray:true}
        });
    }]);