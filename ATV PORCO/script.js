/*var fazenda = {

    pocilga: "",
    qntdPorcos: 0

};*/
let readlineSync = require('readline-sync');






let qntdFazendas = readlineSync.question("Quantas fazendas temos?\n");

console.log("Número de Fazendas: " + qntdFazendas);

/*let qntdPocilgas = readlineSync.question("Quantas pocilgas temos nas fazendas?\n");

console.log("Número de Pocilgas: " + qntdPocilgas);*/

var quantidadePorcos = [];
var pesoPorcos = [];
var qntdPorcosNaoAbate = [];
var qntdPorcosAbate = [];
var qntdPorcosProcriar = [];


for (var id = 0; id < qntdFazendas; id++) {
    quantidadePorcos[id] = readlineSync.question("Quantos porcos temos na fazenda " + (id+1) + "?\n");
    console.log("Fazenda " + (id+1) + ": " + quantidadePorcos[id] + " porcos.");

    for (var i = 0; i < quantidadePorcos[id]; i++) {
        pesoPorcos[i] = readlineSync.question("Qual o peso do porco " + (i+1) + "?\n");
        console.log("Fazenda " + (id+1) + ". O peso do porco " + (i+1) + " é: " + pesoPorcos[i]);

        if(pesoPorcos[i] <= 50)
        {
            qntdPorcosNaoAbate.push("Não Abate");
            console.log("O porco "+ (i+1) + " pesa " + pesoPorcos[i] + " kg");
            
        }
        else if (pesoPorcos[i] > 150) {
            qntdPorcosProcriar.push("transar");
            console.log("O porco "+ (i+1) + " pesa " + pesoPorcos[i] + " kg");
            
        }
        else {
            qntdPorcosAbate.push("Abate");
            console.log("O porco "+ (i+1) + " pesa " + pesoPorcos[i] + " kg");
        
        }
    }
}

console.log("Quantidade de porcos que não vão pro abate: " + qntdPorcosNaoAbate.length);
console.log("Quantidade de porcos que VÃO pro abate: " + qntdPorcosAbate.length);
console.log("Quantidade de porcos que vão pro cabaré: " + qntdPorcosProcriar.length);



//prompt(quantidadePorcos);

//for(var i = 0; i > )
