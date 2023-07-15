const { createTable } = require('./helpers/multiplicar')
const yargs = require('./yargs/yargs')
const colors = require('colors')


console.clear()

createTable(yargs.base, yargs.listar, yargs.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.america.bold, 'creado'.america.bold))
    .catch(error => console.log(error))
