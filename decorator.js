function logar(target, key) {
    console.log("".concat(key, " foi chamada"));
}
var Exemnplo = /** @class */ (function () {
    function Exemnplo() {
    }
    Exemnplo.prototype.exibir = function () {
        console.log("Método exibir sendo executado");
    };
    return Exemnplo;
}());
var ex = new Exemnplo();
ex.exibir();
