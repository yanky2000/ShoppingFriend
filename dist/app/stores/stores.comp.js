(function () {
    'use strict';
    console.log('hey');

    angular
        .module('myApp')
        .component('stores', {
            bindings: {
                store: "<"
            },
            templateUrl: 'app/stores/stores.tmpl.html',
            // controller: "stores",
            controllerAs: 'storesModel',
            controller: function () {
                // TODO: use factory to get storesData using $http
                console.log('stores')
                // this.getCategories = (filterGoods) => {
                //     this.productsInCategory = function (cat) {
                //         filterGoods.filter({ category: cat });
                //     }
                // };
                this.stores = [
                    { name: 'Ашан' },
                    { name: 'Метро' },
                ]

            },
        })



})()