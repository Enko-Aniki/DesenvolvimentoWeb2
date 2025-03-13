import {somar} from "./somar.js";
import {subtrair} from "./subtrair.js";
import {multiplicar} from "./multiplicacao.js";
import { divisao } from "./divisao.js";


const sinal = '+'
const num_1 = 5
const num_2 = 3


let resultado;

switch (sinal) {
    case '+':
        resultado = somar(num_1 , num_2)
        
        break;
    case '-':
        resultado = subtrair(num_1, num_2)
        break;
    case '*':
        resultado = multiplicar(num_1 , num_2)     
        break;
    case '/':
        resultado = divisao(num_1 , num_2)     

        break;

    default:

        console.log("Erro")
        break;
}

console.log(resultado)