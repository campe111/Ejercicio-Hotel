import { HabitacionStandar } from "./HabitacionStandar";
import { HabitacionSuit } from "./HabitacionSuit";
import { Servicio } from "./Servicio";

const habitacionBarata = new HabitacionStandar("libre",1);
const habitacionCara = new HabitacionSuit("libre",10)

habitacionBarata.reservar();
habitacionBarata.reservar();
habitacionBarata.liberar();

habitacionBarata.agregarServicio(new Servicio("servicio a la habitacion", 2500, false));
console.log(habitacionBarata);
habitacionBarata.costoTotal();
habitacionCara.costoTotal();