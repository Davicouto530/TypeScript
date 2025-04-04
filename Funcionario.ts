import { PessoaFisica } from "./pessoa_fisica";

export class Funcionario extends PessoaFisica{
    cargo:string = "";
    salario:number = 0.0;
}