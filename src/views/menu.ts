import { leerTeclado } from '../views/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- INTRODUCIR UN VEHICULO NUEVO')
    console.log('2.- VER LISTA DE VEHICULOS')
    console.log('3.- BORRAR VEHICULO')
    console.log('4.- ELEGIR VEHICULO PARA MODIFICAR')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('SELECCIONE UNO: ') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- VER VEHICULO ELEGIDO')
    console.log('2.- ARRANCAR/APAGAR VEHICULO')
    console.log('3.- CAMBIAR VELOCIDAD VEHICULO')
    console.log('4.- CALCULAR CONSUMO VEHICULO')
    console.log('5.- PONER GASOLINA')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('SELECCIONE UNO: ') )
    return n
}