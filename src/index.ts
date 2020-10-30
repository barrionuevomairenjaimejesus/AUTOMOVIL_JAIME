import { Automovil} from './clases/automovil'
import { menu, menu2 } from './views/menu'
import { leerTeclado } from './views/entradaTeclado'




const main = async() => {
    //creamos un array para almacenar los coches que se vayan creando y le pasamos la clase de automovil
    let coches: Array<Automovil> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1://crear un nuevo vehiculo, para poder almacenar varios necesitamos algo que los identifique ya sea un numero o la matricula
                console.log('Ha seleccionado crear un nuevo vehiculo')
                let identificador:number , consumo:number, gasolina:number
                //aqui realizamos un try catch para comprobar que el identificador que se ha introducido no existe y si existe reportar el error al usuario
                try {
                    identificador = parseInt(await leerTeclado('Por favor introduzca un identificador para el vehiculo'))
                    //usamos parseFloat en lugar de parseInt para el consumo, para poder introducir decimales 
                    consumo = parseFloat( await leerTeclado('Introduzca el consumo del vehiculo por cada 100km'))
                    gasolina = parseFloat(await leerTeclado('Introduzca la cantidad de gasolina que tienee l coche'))
                    let coche=new Automovil(identificador, consumo, gasolina)
                    let existe = false
                    coches.forEach(Coche => {
                        if (coche.Identificador==Coche.Identificador){
                            existe=true
                        }
                    })
                    if (existe){
                        console.log('El vehiculo introducido ya existe, por favor introduzca un vehiculo nuevo')
                    } else{
                        coches.push(coche)
                    }
                } catch (error) {
                    console.log(error)
                }
                break
            case 2:// ver lista de vehiculos
                if (coches.length==0){
                    console.log('No existen vehiculos creados, por favor vaya a la opcion 1 y cree un vehiculo')
                } else {
                    console.log('Ha seleccionado mostrar la lista de vehiculos')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                }
                break
            case 3://eliminar vehiculo
                //primero comprobamos que ya se haya creado algun vehiculo en caso negativo reportamos el error al usuario
                console.log('Ha seleccionado eliminar un vehiculo')
                if (coches.length==0){
                    console.log('No existen vehiculos creados, por favor vaya a la opcion 1 y cree un vehiculo')
                } else { //en caso de que existan vehiculos creados le pedimos que seleccione el que desea eliminar
                    console.log('Estos son los vehiculos creados')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                    let ide1:number
                    ide1= parseInt(await leerTeclado('Por favor introduzca el identificador del vehiculo que desea eliminar'))
                    let existe:boolean=false
                    let index=0
                    //por cada coche cuyo identificador coincida con el que se desea eliminar quitarlo de la lista
                    coches.forEach(Coche => {
                        if (ide1==Coche.Identificador){
                            index=coches.indexOf(Coche)
                            existe=true
                        }
                    })
                    if (existe){
                       coches.splice(index,1)
                    } else {
                        console.log('No existe el vehiculo que desea eliminar, por favor introduzca un vehiculo existente')
                    }
                }
                break
            case 4://elegir un coche para modificar los datos
                if (coches.length==0){
                    console.log('No existen vehiculos creados, porfavor vaya a la opcion 1 y cree un vehiculo ')
                } else {
                    let ide:number
                    console.log('Por favor, seleccione el identificador de un vehiculo para modificarlo')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                    ide= parseInt(await leerTeclado('Introduzca el identificador del vehivulo'))
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.Identificador==ide){
                           index=coches.indexOf(Coche)
                        }
                    })
                    //cuando seleccione la opcion de modificar un vehiculo pasamos al menu 2
                    if(index!=-1){
                        let n2:number
                        let sCoche=coches[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1: // ver vehiculo elegido
                                    console.log('Mostrando el vehiculo elegido')
                                    console.log(sCoche.imprimir())
                                    break
                                case 2: //arrancar o parar el coche
                                    if(sCoche.Encendido){
                                        try {
                                            sCoche.cArrancado()
                                            console.log('Apagando vehiculo')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('Arrancando vehiculo')
                                        sCoche.cArrancado()
                                    }
                                    break
                                case 3: // cambiar la velocidad del coche
                                    let vel:number
                                    vel=parseInt(await leerTeclado("Ha seleccionado cambiar la velocidad del vehiculo, por favor, introduzca la nueva velocidad del vehículo"))
                                    try {
                                      sCoche.Velocidad=vel 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4://calcular el consumo del coche
                                    let tiempo:number
                                    try {
                                        tiempo=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el vehiculo a la velocidad actual, para calcular el consumo"))
                                        console.log(`El vehiculo ha consumido ${sCoche.consumido(tiempo)} litros de gasolina`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 5://poner gasolina
                                    let cantidad: number
                                    cantidad=parseFloat(await leerTeclado('Ha seleccionado poner gasolina, por favor introduzca la cantidad de gasolina del vehiculo'))
                                    sCoche.Gasolina=cantidad
                                    break
                                case 0:
                                    console.log('\nVolviendo al menu principal')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('Este vehiculo no existe')
                    }
                }
                break
            case 0:
                console.log('\nSaliendo')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()