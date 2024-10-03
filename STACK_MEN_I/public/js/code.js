const modalCliente = new bootstrap.Modal(document.getElementById('modalCliente'));
const modalProveedor = new bootstrap.Modal(document.getElementById('modalProveedor'));
const modalInsumo = new bootstrap.Modal(document.getElementById('modalInsumo'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

on(document, 'click', '.btnEditarCliente', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    nombre_editar.value = fila.children[1].innerHTML;
    apellidos_editar.value = fila.children[2].innerHTML; 
    direccion_editar.value = fila.children[3].innerHTML; 
    
    modalCliente.show();
});

on(document, 'click', '.btnEditarProveedor', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar_proveedor.value = fila.children[0].innerHTML;
    nombre_editar_proveedor.value = fila.children[1].innerHTML; 
    
    modalProveedor.show();
});

on(document, 'click', '.btnEditarInsumo', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar_insumo.value = fila.children[0].innerHTML; 
    nombre_editar_insumo.value = fila.children[1].innerHTML; 
    preUni_editar_insumo.value = fila.children[2].innerHTML; 
    stock_editar_insumo.value = fila.children[3].innerHTML; 
    idProveedor_editar_insumo.value = fila.children[4].innerHTML; 

    modalInsumo.show();
});
