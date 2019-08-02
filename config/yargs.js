const opts = {
    descrip: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
};
const argv = require('yargs')
    .command(
        'crear', 'Crea un elemento por hacer', opts)
    .command(
        'actualizar', 'Actualiza el estado completado de una tarea', opts)
        .command(
        'borrar', 'Borra una tarea por hacer', opts)
    .help()
    .argv;
    module.exports ={
        argv
    };