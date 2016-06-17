'use strict';

(function () {
    'use strict';

    angular.module('myApp').component('product', {
        bindings: {
            category: '<',
            product: '<'
        },
        templateUrl: 'app/product/product.tmpl.html',
        controllerAs: 'productModel',
        controller: function controller($state) {
            // this.products = filterGoods.filter({ category: this.category });
            this.goUp = function () {
                console.log('go Up');
                $state.go('^');
            };

            this.showProductCard = function () {
                console.log('show product card');
                $state.go('productCard');
            };
        }
    });
})();