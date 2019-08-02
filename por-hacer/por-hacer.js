const fs = require('fs');
let listadoporhacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puedo grabar', err); 
    });
}
const cargardb = () => {
    try {
        listadoporhacer = require('../db/data.json');
    }
    catch{
        listadoporhacer = [];
    }
}
const crear = (descripcion) => {
    cargardb();
    let porhacer = {
        descripcion,
        completado: false
    };
    listadoporhacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const actualizar = (descripcion,completado = true)=>{

    cargardb();

    let index = listadoporhacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
    })

    if (index >=0)
    {
        listadoporhacer[index].completado=completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
    
}

const borrar = (descripcion,)=>{

    cargardb();

    let index = listadoporhacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
    })

    if (index >=0)
    {
        listadoporhacer.splice(index,1);;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
    
}

const getListado = () => {
    cargardb();
    return listadoporhacer;
};
module.exports = {
    crear, getListado, actualizar, borrar
}