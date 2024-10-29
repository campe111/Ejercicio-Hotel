import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

class HabitacionSuit extends Habitacion {
    constructor(estado: string, numero: number) {
        super(estado, numero);
        this.precioBase = 120000;
        this.agregarServicio(new Servicio("Limpieza", 10000, true));
        this.agregarServicio(new Servicio("Internet", 2500, true));
        this.agregarServicio(new Servicio("Acceso a pileta", 8000, true));
        this.agregarServicio(new Servicio("Tv por cable", 2000, false));
        this.agregarServicio(new Servicio("Buffet", 9100, false));
    }

    costoTotal(): number {
        let total: number = 0;
        let serviciosConCosto: Servicio[] = this.servicios.filter(
            (servicio) => servicio.esGratis() == false
        );
        serviciosConCosto.forEach((servicioCuenta) => {
            total += servicioCuenta.getCosto() * 0.9;
            console.log(
                `Cargo: ${servicioCuenta.getNombre()} $${servicioCuenta.getCosto()}`
            );
        });
        total += this.precioBase;
        console.log(`Habitacion ${this.precioBase}`);
        console.log(`Total ${total}`);
        return total;
    }
}
export { HabitacionSuit };
