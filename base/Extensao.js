"use strict";
exports.__esModule = true;
exports.Extensao = void 0;
var Extensao = /** @class */ (function () {
    function Extensao() {
        this.value = 0;
    }
    Extensao.prototype.logica = function (primeiro, operador, segundo) {
        switch (operador) {
            case "+":
                return this.soma(primeiro, segundo);
            case "-":
                return this.sub(primeiro, segundo);
            case "*":
                return this.mult(primeiro, segundo);
            case "/":
                return this.divisao(primeiro, segundo);
            default:
                break;
        }
        return 0;
    };
    Extensao.prototype.calculo = function (primeiro, operador, segundo) {
        var resultado = this.logica(primeiro, operador, segundo);
        this.value = resultado;
    };
    Extensao.prototype.soma = function (primeiro, segundo) {
        return primeiro + segundo;
    };
    Extensao.prototype.sub = function (primeiro, segundo) {
        return primeiro - segundo;
    };
    Extensao.prototype.mult = function (primeiro, segundo) {
        return primeiro * segundo;
    };
    Extensao.prototype.divisao = function (primeiro, segundo) {
        return primeiro / segundo;
    };
    Extensao.prototype.showValue = function () {
        console.log(this.value);
    };
    return Extensao;
}());
exports.Extensao = Extensao;
