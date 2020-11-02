import { leerTeclado } from '../views/entradaTeclado'

//MENÚ 1
export const menu1 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- NUEVO COCHE')
    console.log('2.- CUANTOS COCHES HAY EN EL GARAGE?')
    console.log('3.- VENDER COCHE')
    console.log('4.- CAMBIAR DATOS DE ALGÚN COCHE')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('ESPERANDO OPCIÓN... : ') )
    return n
}
//MENÚ 2
export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- OBSERVAR COCHE')
    console.log('2.- ARRANCAR/APAGAR COCHE')
    console.log('3.- ACELERAR O FRENAR COCHE')
    console.log('4.- CUANTO HE GASTADO?')
    console.log('5.- REPOSTAGE DE GASOLINA')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('ESPERANDO OPCIÓN... : ') )
    return n
}