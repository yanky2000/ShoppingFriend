"use strict";

var goods = [{
    name: "Огурцы",
    price: 125.90,
    weightKg: 1,
    sellBundle: 1,
    sellParam: "weightKg",
    category: "Овощи",
    group: "",
    description: "Огурцы весовые"
}, {
    "name": "Помидоры",
    "price": 160.00,
    "weightKg": 1,
    "sellBundle": 1,
    "sellParam": "weightKg",
    "category": "Овощи",
    "description": "Помидоры свежие, весовые"
}];

var test = _.where(goods, { name: "Огурцы" });

console.log(test);