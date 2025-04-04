"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this.id = 0;
        this.endereco = "";
        this.email = "";
        this.telefone = "";
    }
    Person.prototype.cadastrar = function () {
        var msg = "";
        if (this.endereco != "") {
            msg = "Dados Cadastrado";
        }
        else {
            msg = "Não cadastrou";
        }
        return msg;
    };
    return Person;
}());
exports.Person = Person;
var ps = new Person();
ps.endereco = "Rua Nova Esperança, 78";
console.log(ps.cadastrar());
