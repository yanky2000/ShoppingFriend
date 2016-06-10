(function () {
    'use strict';
    angular
        .module('myApp')
        .component('product', {
            bindings: {
                category: '<',
                product: '<',
            },
            templateUrl: 'app/product/product.tmpl.html',
            controllerAs: 'productModel',
            controller: function () {
                this.products = filterGoods.filter({ category: this.category });

            },
        })

})();