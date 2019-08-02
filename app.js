const argv = require('./config/yargs').argv;
const colors = require('colors');

const porhacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch(comando)
{
case 'crear':
    let tarea = porhacer.crear(argv.descrip);
    console.log('Guardado');
    break;
    case 'listar':
    let listado = porhacer.getListado();
     for (let tarea of listado)
     {
        console.log('====Por hacer===='.green);
        console.log(tarea.descripcion);
        console.log('Estado', tarea.completado);
        console.log('================='.green);
     }
    break;
    case 'actualizar':
    let actualizado = porhacer.actualizar(argv.descrip, argv.completado);
    console.log('Actualiza tarea');
    console.log(actualizado);
    break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.d);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

}