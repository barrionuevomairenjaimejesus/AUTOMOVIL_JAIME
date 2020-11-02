export class Automovil {
    static push: any
    static forEach(a: (Automovil: { Identificador: any }) => void) {
        throw new Error('error')
    }
    private gasto : number
    private identificador : any
    private gasolina: number 
    private speed : number
    private encendido : boolean

    constructor (identificador:any, consumo:number, gasolina:number){
        this.identificador = identificador
        this.gasto = consumo
        this.gasolina = gasolina
        this.encendido = false 
        this.speed = 0
    }

    get Consumo(){
        return this.gasto
    }

    get Identificador(){
        return this.identificador
    }

    get Encendido(){
        return this.encendido
    }
    get Gasolina(){
        return this.gasolina
    }

    set Gasolina(c:number){
        if(this.gasolina <= 0){
            throw 'EL COCHE NO TIENE GASOLINA'
        }
        this.gasolina=c
    }
    cArrancado(){
        if(this.Encendido==false){
            this.encendido=true
        }else{
            if (this.speed!=0){
                throw 'EL VEHICULO SIGUE EN MARCHA NO SE PUEDE APAGAR'
            } else {
                this.encendido=false
            }
        }
    }

    get Velocidad(){
        return this.speed
    }

    set Velocidad(num:number){
        if(this.encendido==false){
            throw 'CON EL COCHE APAGADO NO PODEMOS CAMBIAR LA VELOCIDAD, POR FAVOR ARRANCALO'
        } else {
            this.speed=num
        }
    }

    consumido(t:number){ 
        if(!this.encendido || this.speed==0){
            throw 'NO HAY CONSUMO DISPONIBLE MIENTRAS EL COCHE ESTÉ APAGADO'
        } else {
            return (this.speed/t)*(this.gasto/100)
        }
    }

    imprimir(){
        return `EL COCHE ${this.identificador} TIENE UNA VELOCIDAD DE  ${this.speed} KM/H Y ESTÁ GASTANDO ${this.gasto} LITROS DE GASOLINA`
    }

}