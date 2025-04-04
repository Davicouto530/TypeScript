interface Person {
    name: string;
    idade: number;
    email: string;
}

const pessoa: Person={
    name: "Maria dias",
    email: "mariadias@gmal.com",
    idade: 19
}
console.log(pessoa);
console.log(`Nome: ${pessoa.name}`);
console.log(`Idade: ${pessoa.idade}`);