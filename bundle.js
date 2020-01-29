"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario =
/*#__PURE__*/
function () {
  function Usuario() {
    _classCallCheck(this, Usuario);

    this.email, this.password;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return false;
    }
  }]);

  return Usuario;
}();

;

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
  }

  _createClass(Admin, [{
    key: "isAdmin",
    value: function isAdmin() {
      return true;
    }
  }]);

  return Admin;
}(Usuario);

;
var User1 = new Usuario('email@ok.com', 'senha123');
var Admin1 = new Admin('email2@ok.com', 'senha321'); //console.log(User1.isAdmin());
//console.log(Admin1.isAdmin());

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (item) {
  return item.idade;
});
var maiorIdade = usuarios.filter(function (item) {
  return item.idade >= 18;
});
var findJob = usuarios.find(function (job) {
  return job.empresa === 'Facebook';
});
var idade2x = usuarios.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
}); //utilizou o SPREAD
//console.log(idade2x);
//const usuario = { nome: 'Diego', idade: 23 };

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; //console.log(mostraIdade(usuario));


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado; //console.log(nome, cidade, estado);

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1); //console.log(x);
//console.log(y);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} //console.log(soma(1,2,3,4,5,6));


var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario2);
console.log(usuario3); //template Literals é a `${var}`(crase)
//Object short syntax -> referente ao caso de que eu tenha que passar uma variavel para dentro do objeto, se ela tiver o mesmo nome, posso somente deixar ela.

var name = 'Diego';
var year = 23;
var user = {
  name: name,
  year: year,
  cidade: 'Rio do Sul'
};
