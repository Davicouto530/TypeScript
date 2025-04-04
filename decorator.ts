function logar(target:any, key:string){
    console.log(`${key} foi chamada`);
}

class Exemnplo{
    exibir(){
        console.log("Método exibir sendo executado");
    }
}

const ex = new Exemnplo();
ex.exibir();