export class Person{
    id:number = 0;
    endereco:string = "";
    email:string = "";
    telefone:string = "";

    cadastrar():string {
        let msg = "";
        if(this.endereco != ""){
            msg = "Dados Cadastrado";
        }else{
            msg = "Não cadastrou";
        }

        return msg;
    }
}

const ps = new Person();
ps.endereco = "Rua Nova Esperança, 78";
console.log(ps.cadastrar());