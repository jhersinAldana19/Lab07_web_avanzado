const Insumo = require('../models/Insumo');

module.exports.mostrar = (req, res) => {
    Insumo.find({}).populate('idproveedor').exec((error, insumos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los insumos'
            });
        }
        return res.render('compras/insumos', { insumos }); // Asegúrate de que el nombre de la vista sea correcto
    });
};


module.exports.crear = (req, res) => {
    const insumo = new Insumo({
        nominsumo: req.body.nominsumo,
        preUni: req.body.preUni,
        stock: req.body.stock,
        idproveedor: req.body.idproveedor 
    });

    insumo.save((error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            });
        }
        res.redirect('/compras/insumos'); 
    });
};

module.exports.editar = (req, res) => {
    const id = req.body.id_editar_insumo.trim();
    const nominsumo = req.body.nominsumo_editar; 
    const preUni = req.body.preUni_editar;
    const stock = req.body.stock_editar;

    Insumo.findByIdAndUpdate(id, { nominsumo, preUni, stock }, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al insumo',
                error: error.message
            });
        }
        res.redirect('/compras/insumos'); 
    });
};

module.exports.borrar = (req, res) => {
    const id = req.params.id;

    Insumo.findByIdAndRemove(id, (error) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando al insumo'
            });
        }
        res.redirect('/compras/insumos'); 
    });
};
