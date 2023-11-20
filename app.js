/*requires*/
const express = require('express');
const path = require('path');

/*settings*/
const app = express();
const PORT = 3030;
app.use(express.static(path.join(__dirname,'public')));


/*routes*/
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.get('/product-detail', (req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
app.get('/product-cart', (req,res) => res.sendFile(path.join(__dirname, 'views','productCart.html')));
app.get('/header', (req,res) => res.sendFile(path.join(__dirname, 'views', 'partials' , 'header.html')));



/*port*/
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))