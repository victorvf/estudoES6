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