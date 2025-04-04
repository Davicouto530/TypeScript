var Usuario = /** @class */ (function () {
    function Usuario(nome_usuario, senha_usuario) {
        this.nome_usuario = "";
        this.senha_usuario = "";
        this.email_usuario = "";
        this.nome_usuario = nome_usuario;
        this.senha_usuario = senha_usuario;
    }
    Usuario.prototype.cadastrar = function () {
        console.log("O usuario: ".concat(this.nome_usuario, " foi cadastrado"));
    };
    return Usuario;
}());
//instância é um porecsso de criar objeto 
//baseado em classe. O termo new chama
//o constructor padrão de classe para inicializa-lo
var us = new Usuario("Davi do couto", "123456");
us.cadastrar();
