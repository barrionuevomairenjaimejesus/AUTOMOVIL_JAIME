export class Automovil {
    static push: any
    static forEach(a: (Automovil: { Identificador: any }) => void) {
        throw new Error('error')
    }
    private identificador : any
    private consumo : number
    private gasolina: number 
    private encendido : boolean //lo ponemos como un dato booleano ya que puede estar encendido o apagado (false, true)
    private velocidad : number

    constructor (identificador:any, consumo:number, gasolina:number){
        this.identificador = identificador
        this.consumo = consumo
        this.gasolina = gasolina
        this.encendido = false //lo inicializamos en false 
        this.velocidad = 0
    }

    get Identificador(){
        return this.identificador
    }

    get Consumo(){
        return this.consumo
    }

    get Encendido(){
        return this.encendido
    }
    get Gasolina(){
        return this.gasolina
    }

    set Gasolina(c:number){
        if(this.gasolina <= 0){
            throw 'ERROR deposito sin gasolina'
        }
        this.gasolina=c
    }
    cArrancado(){
        if(this.Encendido==false){
            this.encendido=true
        }else{
            if (this.velocidad!=0){
                throw 'ERROR primero debe parar el vehiculo para apagarlo'
            } else {
                this.encendido=false
            }
        }
    }

    get Velocidad(){
        return this.velocidad
    }

    //comprobacion en el caso 3 del menu 2 si el coche esta arrancado o no para cambiar la velocidad
    set Velocidad(num:number){
        if(this.encendido==false){
            throw 'ERROR, no puedes cambiar la velocidad si el vehiculo esta parado, por favor arranque el vehiculo para cambiarla'
        } else {
            this.velocidad=num
        }
    }
    //comprobacion del consumo del vehiculo
    consumido(t:number){ 
        if(!this.encendido || this.velocidad==0){
            throw 'ERROR, no puedes calcular el consumo de un vehiculo parado, por favor arranque el vehiculo para cambiarlo'
        } else {
            return (this.velocidad/t)*(this.consumo/100)
        }
    }
    //imprimir la informacion del vehiculo
    imprimir(){
        return `El vehiculo con identificador ${this.identificador} va a ${this.velocidad} km/h y consume ${this.consumo} L de gasolina cada 100 km`
    }

}