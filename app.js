const express = require('express');
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app = express();
// !parsing body-parser
app.use(bodyParser.urlencoded({extended: true}));

// !using routes
app.use('/products', require('./routes/products'));

app.listen(port, function(){                                   //!start server
    console.log(`server listening on port ${port}/products`);
});