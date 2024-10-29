import {Servicio} from "./Servicio";
abstract class Habitacion {
    protected estado: string;
    protected numero: number;
    protected precioBase: number;
    protected servicios: Servicio[];

    constructor(estado:string , numero: number){
        this.estado = estado;
        this.numero = numero;
        this.servicios = [];
        this.precioBase = 0;
    }
    public reservar() : void{
        if(this.estado == "libre"){
            this.estado = "reservada";
            console.log(`La Habitacion ${this.numero} esta ${this.estado}`);
        }
        else{
            console.log(`La Habitacion ${this.numero} no se pudo reservar porque ya esta ocupada`);
        }   
    }

    public liberar() : void {
        if(this.estado == "reservada"){
            this.estado = "libre";
            console.log(`La Habitacion ${this.numero} esta ${this.estado}`);
        }
        else{
            console.log(`La Habitacion ${this.numero} no se pudo liberar porque no esta reservada`);
        }   
    }

    public agregarServicio(servicio: Servicio):void {
            this.servicios.push(servicio);
    }

    abstract costoTotal():number;

}
export {Habitacion};
