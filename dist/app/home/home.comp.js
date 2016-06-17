'use strict';

(function () {
    'use strict';

    angular.module('myApp').component('home', {
        templateUrl: 'app/home/home.tmpl.html',
        controllerAs: 'homeCtrl',
        controller: function controller() {
            console.log('stores loaded');
            this.stores = [{ name: 'Ашан' }, { name: 'Метро' }];
        }
    });
})();