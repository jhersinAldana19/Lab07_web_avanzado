const express = require('express');
const app = express();
const db = require('./db'); 


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const clientes = require('./routes/clientes');
app.use(clientes);


const proveedores = require('./routes/proveedores');
app.use(proveedores);


const insumos = require('./routes/insumos');
app.use(insumos);


app.use(express.static('public'));
app.use('/almacen/proveedores', require('./routes/proveedores'));
app.use('/almacen/insumos', require('./routes/insumos'));

app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000');
});
