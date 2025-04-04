"use strict";
class Usuario {
    constructor(nome_usuario, senha_usuario) {
        this.nome_usuario = "";
        this.senha_usuario = "";
        this.email_usuario = "";
        this.nome_usuario = nome_usuario;
        this.senha_usuario = senha_usuario;
    }
    cadastrar() {
        console.log(`O usuario: ${this.nome_usuario} foi cadastrado`);
    }
}
//instância é um porecsso de criar objeto 
//baseado em classe. O termo new chama
//o constructor padrão de classe para inicializa-lo
let us = new Usuario("Davi do couto", "123456");
us.cadastrar();
