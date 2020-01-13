const express = require('express')
const app = express()
const controller = require('./controller')

app.set('view engine', 'pug');
 
app.get('/', function (req, res) {
    var arr = [];

    for (var i = 1; i <= 6; i++) {
        const product = controller["product_" + i]();
        if (product.price){
            arr.push(product);
        }
    }

    res.render('index', { title: 'GO::GO:GO', message: 'Product List', products: arr });
});
 
app.listen(3000)