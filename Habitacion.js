"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitacion = void 0;
var Habitacion = /** @class */ (function () {
    function Habitacion(estado, numero) {
        this.estado = estado;
        this.numero = numero;
        this.servicios = [];
        this.precioBase = 0;
    }
    Habitacion.prototype.reservar = function () {
        if (this.estado == "libre") {
            this.estado = "reservada";
            console.log("La Habitacion ".concat(this.numero, " esta ").concat(this.estado));
        }
        else {
            console.log("La Habitacion ".concat(this.numero, " no se pudo reservar porque ya esta ocupada"));
        }
    };
    Habitacion.prototype.liberar = function () {
        if (this.estado == "reservada") {
            this.estado = "libre";
            console.log("La Habitacion ".concat(this.numero, " esta ").concat(this.estado));
        }
        else {
            console.log("La Habitacion ".concat(this.numero, " no se pudo liberar porque no esta reservada"));
        }
    };
    Habitacion.prototype.agregarServicio = function (servicio) {
        this.servicios.push(servicio);
    };
    return Habitacion;
}());
exports.Habitacion = Habitacion;
