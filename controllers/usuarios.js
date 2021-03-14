const{ response, request } = require('express');

const usuariosGet = (req = request, res=response) => {

    const {nombre, apellido, clave='123456'} = req.query;

    res.json({
        mensaje: 'get API- Controller',
        nombre, apellido, clave
    });
}

const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
        mensaje: 'put API-controller', 
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        mensaje: 'post API-Controller',
        nombre, edad 
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        mensaje: 'delete API- Controller'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        mensaje: 'patch API-desde controller'
    });
}


module.exports = { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch }

