import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

class HabitacionStandar extends Habitacion {
    constructor(estado: string, numero: number) {
        super(estado, numero);
        this.precioBase = 70000;
        this.agregarServicio(new Servicio("Limpieza", 10000, true));
        this.agregarServicio(new Servicio("Internet", 2500, false));
    }
    costoTotal(): number {
        let total: number = 0;
        let serviciosConCosto: Servicio[] = this.servicios.filter(servicio => servicio.esGratis() == false);
        serviciosConCosto.forEach(servicioCuenta => {
            total += servicioCuenta.getCosto()
            console.log(`Cargo: ${servicioCuenta.getNombre()} $${servicioCuenta.getCosto()}`);

        });
        total += this.precioBase;
        console.log(`Habitacion ${this.precioBase}`);
        console.log(`Total ${total}`);
        return total;

    }
}
export { HabitacionStandar };