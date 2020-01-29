/*
class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.todos = [];
        this.usuarios = [];
    };

    addTodos(){
        this.todos.push('Novo TODO');
        console.log(this.todos);
    };
}
//os metodos staticos não conseguem enxergar o que tem dentro da classe, 
//eles só servem sendo passado parametros e não precisar dar NEW
class Matematica{
    static soma(a,b){
        return a+b;
    }
}

const MinhaLista = new TodoList();

document.querySelector('button').onclick = ()=>{
    MinhaLista.addTodos();
}

const arr = [1,3,5,6,8,9];

const newArr = arr.map(function(item){
    return item * 2;
});
//[1,6,10,12,16,18]

//função recursiva, pegar o valor da soma[0](total) = 0 e next = 1
const sum = arr.reduce((total, next) => {
    return total + next;
});

//sempre a função tem que retorna true ou false
const filter = arr.filter(item => {
    return item%2 === 0;
});

//sempre a função tem que retorna true ou false / arrow function
const find = arr.find(item => item === 4);

//desestruturação
const usuario = {
    nome: 'Victor',
    idade: 22,
    endereco: {
        cidade: 'Teresina',
        estado: 'PI'
    }
}

const { nome, idade, endereco:{ cidade } } = usuario;
console.log(nome, idade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}
mostraNome(usuario);

//REST

const user = {
    nome: 'Victor',
    idade: 22,
    empresa: 'Vida'
};

const {nome, ...resto} = user;
console.log(nome);//victor
console.log(resto);// {idade:22, empresa:'vida'}

const array = [1,2,4,5,6];

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

function soma (a,b, ...params){
    return a+b;
}

soma(1,2,3,4,5);

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

const usuario1 = {
    nome: 'victor',
    idade:22,
    empresa: 'vida'
}

const usuario2 = { ...usuario1, nome: 'rafael'};
*/

class Usuario{
    constructor(){
        this.email,
        this.password
    };

    isAdmin(){
        return false;
    };
};

class Admin extends Usuario{
    constructor(){
        super();
    };

    isAdmin(){
        return true;
    };
};

const User1 = new Usuario('email@ok.com', 'senha123');
const Admin1 = new Admin('email2@ok.com', 'senha321');

//console.log(User1.isAdmin());
//console.log(Admin1.isAdmin());

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
const idade = usuarios.map(item => item.idade);

const maiorIdade = usuarios.filter(item => item.idade >= 18);

const findJob = usuarios.find(job => job.empresa === 'Facebook');

const idade2x = usuarios
.map(item => ({...item, idade: item.idade*2}))
.filter(item => item.idade <= 50); //utilizou o SPREAD

//console.log(idade2x);


//const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

//console.log(mostraIdade(usuario));

const promise = () => new Promise((resolve, reject) => resolve());

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;
//console.log(nome, cidade, estado);

const arr = [1,2,3,4,5,6];
const [x, ...y] = arr;

//console.log(x);
//console.log(y);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

//console.log(soma(1,2,3,4,5,6));

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2);
console.log(usuario3);

//template Literals é a `${var}`(crase)
//Object short syntax -> referente ao caso de que eu tenha que passar uma variavel para dentro do objeto, se ela tiver o mesmo nome, posso somente deixar ela.
const name = 'Diego';
const year = 23;

const user = {
 name,
 year,
 cidade: 'Rio do Sul',
};