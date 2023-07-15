const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Es la base para hacer la multiplicacion',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        describe: 'Muestra la tabla por conosla',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Limite hasta donde deseas multiplicar',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        const base = argv.base
        if (isNaN(base)) {
            throw 'La base debe ser un numero'
        }
        return true
    })

    .argv;


module.exports = yargs