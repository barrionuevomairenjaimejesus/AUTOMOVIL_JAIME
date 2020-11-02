import { Automovil} from './clases/automovil'
import { menu1, menu2 } from './views/menu'
import { leerTeclado } from './views/entradaTeclado'

const main = async() => {
    let coches: Array<Automovil> = new Array()
    let n: number 
    do {
        n = await menu1()
        switch(n){
            case 1:
                console.log('COMPREMOS UN NUEVO COCHE... ')
                let identificador:number , consumo:number, gasolina:number
                try {
                    consumo = parseFloat( await leerTeclado('CONSUMO POR 100 KM... '))
                    identificador = parseInt(await leerTeclado('IDENTIFICADOR DEL COCHE... '))
                    gasolina = parseFloat(await leerTeclado('GASOLINA DE COCHE... '))
                    let coche=new Automovil(identificador, consumo, gasolina)
                    let existe = false
                    coches.forEach(Coche => {
                        if (coche.Identificador==Coche.Identificador){
                            existe=true
                        }
                    })
                    if (existe){
                        console.log('ESE COCHE YA LO TENEMOS NECESITAMOS OTRA OPCIÓN... ')
                    } else{
                        coches.push(coche)
                    }
                } catch (error) {
                    console.log(error)
                }
                break
            case 2:
                if (coches.length==0){
                    console.log('NO TENEMOS COCHES, COMPREMOS UNO... ')
                } else {
                    console.log('VEAMOS NUESTROS COCHES... ')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                }
                break
            case 3:
                console.log('HORA DE VENCER UN COCHE... ')
                if (coches.length==0){
                    console.log('NO TENEMOS COCHES, COMPREMOS UNO... ')
                } else {
                    console.log('COCHES EXISTENTES... ')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                    let ide1:number
                    ide1= parseInt(await leerTeclado('DIME EL ID DEL QUE QUIERES VENDER... '))
                    let existe:boolean=false
                    let index=0
                    coches.forEach(Coche => {
                        if (ide1==Coche.Identificador){
                            index=coches.indexOf(Coche)
                            existe=true
                        }
                    })
                    if (existe){
                       coches.splice(index,1)
                    } else {
                        console.log('ESE ID NO LO TENEMOS REGISTRADO, NO TENEMOS ESE COCHE')
                    }
                }
                break
            case 4:
                if (coches.length==0){
                    console.log('NO TENEMOS COCHES, COMPREMOS UNO... ')
                } else {
                    let ide:number
                    console.log('DIME EL ID DEL QUE QUIERES MODIFICAR... ')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)
                    })
                    ide= parseInt(await leerTeclado('DIME EL ID DEL COCHE... '))
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.Identificador==ide){
                           index=coches.indexOf(Coche)
                        }
                    })
                    if(index!=-1){
                        let n2:number
                        let sCoche=coches[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('ENSEÑANDO COCHE... ')
                                    console.log(sCoche.imprimir())
                                    break
                                case 2:
                                    if(sCoche.Encendido){
                                        try {
                                            sCoche.cArrancado()
                                            console.log('APAGANDO... ')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('ARRANCANDO')
                                        sCoche.cArrancado()
                                    }
                                    break
                                case 3:
                                    let vel:number
                                    vel=parseInt(await leerTeclado("VAMOS A CAMBIAR LA VELOCIDAD, ¿CUÁL TENEMOS AHORA MISMO?"))
                                    try {
                                      sCoche.Velocidad=vel 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let tiempo:number
                                    try {
                                        tiempo=parseInt(await leerTeclado("DIME EL TIEMPO QUE HEMOS TENIDO EL COCHE A ESA VELOCIDAD..."))
                                        console.log(`POR LO TANTO HEMOS GASTADO: ${sCoche.consumido(tiempo)} LITROS`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 5:
                                    let cantidad: number
                                    cantidad=parseFloat(await leerTeclado('VAMOS A METER GASOLINA, ¿CUÁNTOS LITROS VAN A SER?'))
                                    sCoche.Gasolina=cantidad
                                    break
                                case 0:
                                    console.log('\nVOLVIENDO... MENÚ PRINCIPAL...')
                                    break
                                default:
                                    console.log("ALGO NO HA FUNCIONADO... OPCIÓN NO VALIDA")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('NO TENEMOS ESE COCHE')
                    }
                }
                break
            case 0:
                console.log('\nSALIENDO... ')
                break
            default:
                console.log("ALGO NO HA FUNCIONADO... OPCIÓN NO VALIDA")
                break
        }
    } while (n!=0);
}

main()