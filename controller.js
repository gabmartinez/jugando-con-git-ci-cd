function product_1() {
    return {
        "name": "product_1",
        "price": 5
    }
}

function product_2() {
    return {
        "name": "product_2",
        "price": NaN
    }
}

function product_3() {
    return {
        "name": "product_3",
        "price": NaN
    }
}

function product_4() {
    return {
        "name": "product_4",
        "price": NaN
    }
}

function product_5() {
    return {
        "name": "product_5",
        "price": NaN
    }
}

function product_6() {
    return {
        "name": "product_6",
        "price": NaN
    }
}

function randomPrice(min, max) {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100
}

module.exports = {
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    randomPrice
}