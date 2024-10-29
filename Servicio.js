"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
var Servicio = /** @class */ (function () {
    function Servicio(nombre, costo, esGratis) {
        this.nombre = nombre;
        this.costo = costo;
        this.gratis = esGratis;
    }
    Servicio.prototype.getNombre = function () {
        return this.nombre;
    };
    Servicio.prototype.getCosto = function () {
        return this.costo;
    };
    Servicio.prototype.esGratis = function () {
        return this.gratis;
    };
    return Servicio;
}());
exports.Servicio = Servicio;
