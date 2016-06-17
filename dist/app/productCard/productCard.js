'use strict';

(function () {
    'use strict';

    angular.module('myApp').component('productCard', {
        bindings: {
            product: "<",
            category: '<'
        },
        templateUrl: 'app/productCard/productCard.html',
        controllerAs: 'productCard',
        controller: function controller(filterGoods) {

            this.products = filterGoods.filter({ category: this.category });
        }
    });
})();