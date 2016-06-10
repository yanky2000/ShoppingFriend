(function () {
    'use strict';
    angular
        .module('myApp')
        .component('product', {
            bindings: {
                category: '<', 
                product: '<', 
                id : '<', 

            },
            templateUrl: 'app/product/product.tmpl.html',
            // template: `{{productModel.products[0].name}}
            // <span>{{productModel.categoryName}}</span>
            // <span>{{1+1}}</span>
            // `,
            controllerAs: 'productModel',
            controller: productCtrl,
    //         controller: function (filterGoods) {
    //             this.products = filterGoods.filter({ category: "Овощи" });

    // } 
            
            
            
        })



    function productCtrl(filterGoods) {
        // this.category = categoryName;
        this.products = filterGoods.filter({ category: "Овощи" });
        console.log(`bindging ${this.id}`)
        console.log(`cat ${this.category}`)

    }



})();