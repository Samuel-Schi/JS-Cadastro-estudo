import {Cliente}  from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo" , 11122233309);

const cliente2 = new Cliente("Alice" , 88822233309);

const cliente3 = new Cliente("Camila" , 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001 , cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102 , cliente2);

const conta3 = new ContaCorrente(103 , cliente3);

console.log(conta2);