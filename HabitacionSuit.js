"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitacionSuit = void 0;
var Habitacion_1 = require("./Habitacion");
var Servicio_1 = require("./Servicio");
var HabitacionSuit = /** @class */ (function (_super) {
    __extends(HabitacionSuit, _super);
    function HabitacionSuit(estado, numero) {
        var _this = _super.call(this, estado, numero) || this;
        _this.precioBase = 120000;
        _this.agregarServicio(new Servicio_1.Servicio("Limpieza", 10000, true));
        _this.agregarServicio(new Servicio_1.Servicio("Internet", 2500, true));
        _this.agregarServicio(new Servicio_1.Servicio("Acceso a pileta", 8000, true));
        _this.agregarServicio(new Servicio_1.Servicio("Tv por cable", 2000, false));
        _this.agregarServicio(new Servicio_1.Servicio("Buffet", 9100, false));
        return _this;
    }
    HabitacionSuit.prototype.costoTotal = function () {
        var total = 0;
        var serviciosConCosto = this.servicios.filter(function (servicio) { return servicio.esGratis() == false; });
        serviciosConCosto.forEach(function (servicioCuenta) {
            total += servicioCuenta.getCosto() * 0.9;
            console.log("Cargo: ".concat(servicioCuenta.getNombre(), " $").concat(servicioCuenta.getCosto()));
        });
        total += this.precioBase;
        console.log("Habitacion ".concat(this.precioBase));
        console.log("Total ".concat(total));
        return total;
    };
    return HabitacionSuit;
}(Habitacion_1.Habitacion));
exports.HabitacionSuit = HabitacionSuit;
