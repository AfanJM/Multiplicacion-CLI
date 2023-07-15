const fs = require('fs')
const colors = require('colors')

/**
 * @return la base es necesaria para la multiplicacion
 */

const createTable = async (base, listar = false, hasta = 10) => {

    try {

        let ouput = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) {
            // -- i = 1 
            ouput += `${base} X ${i} =  ${base * i}\n`
            consola +=`${base} ${'X'.red} ${i} ${'='.red} ${base * i}\n`
        }

        if (listar) {
            console.log('==================================='.america.bold)
            console.log(`TABLA DEL:`.america, colors.blue(base))
            console.log('==================================='.america.bold)

            console.log(consola.bold)
        }

        fs.writeFileSync(`./output/Tabla-${base}.txt`, ouput)

        return `Tabla-${base}.txt`

    } catch (error) {
        console.log(error)

        throw error

    }
}



module.exports = { createTable }