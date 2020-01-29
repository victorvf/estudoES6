//caso eu queira renomear, utilizo o: as
//caso o outro arquivo possua um default e varios outros export
//eu chamo da seguinte forma: import sub, { soma } from './funcoes';
//import * as funcoes from './funcoes';
//funcoes.soma(1,2);
import {soma as somaFunction} from './funcoes';

console.log(somaFunction(1,3));