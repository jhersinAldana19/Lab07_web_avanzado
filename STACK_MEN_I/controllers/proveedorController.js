
const Proveedor = require('../models/Proveedor');


module.exports.mostrar = (req, res) => {
    Proveedor.find({}, (error, proveedores) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            });
        }
        return res.render('compras/proveedores', { proveedores }); 
    });
};


module.exports.crear = (req, res) => {
    const proveedor = new Proveedor({
        nombrecia: req.body.nombrecia 
    });

    proveedor.save((error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el proveedor'
            });
        }
        res.redirect('/compras/proveedores'); 
    });
};

module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombrecia = req.body.nombrecia_editar; 

    Proveedor.findByIdAndUpdate(id, { nombrecia }, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al proveedor',
                error: error.message
            });
        }
        res.redirect('/compras/proveedores'); 
    });
};

module.exports.borrar = (req, res) => {
    const id = req.params.id;

    Proveedor.findByIdAndRemove(id, (error) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando al proveedor'
            });
        }
        res.redirect('/compras/proveedores'); 
    });
};
