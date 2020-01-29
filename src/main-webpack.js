//caso eu queira renomear, utilizo o: as
//caso o outro arquivo possua um default e varios outros export
//eu chamo da seguinte forma: import sub, { soma } from './funcoes';
//import * as funcoes from './funcoes';
//funcoes.soma(1,2);
import {soma as somaFunction} from './funcoes';

//console.log(somaFunction(1,3));


const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('ok')}, 2000);
});

async function executarPromise(){
    const response = await minhaPromise();

    console.log(response);
}

//executarPromise();

import axios from 'axios';

class Api{
    static async getUser(user){
        try{
            const response = await axios.get(`https://api.github.com/user/${user}`);
            console.log(response);
        }catch(err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUser('victorvf');

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
};

umPorSegundo();

import axios from 'axios';

async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }catch(err){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');