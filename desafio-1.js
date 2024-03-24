// 1. 

let nota1 = 8;

let nota2 = 9;

let nota3 = 7;



let media = (nota1 + nota2 + nota3) / 3;

let alineNota = media.toFixed(2)

console.log(`A média da Aline é de ${alineNota}.\n`);



// 2.

let menorNumero = Math.min(15, 8, 90, 75, 102, 6, 2);

let maiorNumero = Math.max(15, 8, 90, 75, 102, 6, 2);

console.log(`O menor número é o ${menorNumero} e o maior número é o ${maiorNumero}.\n`);



// 3. 

let frascos = [12, 5, 23, 17, 8, 14, 3, 19];

frascos.sort((a, b) => a - b);

console.log(`A ordem dos frascos é ${frascos}.\n`);



//4. 

let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

let primos = numeros.filter(num => {

  for (let i = 2; i < num; i++)

    if (num % i === 0) return false;

  return num > 1;

});

console.log(`Os números primos são ${primos}.\n`);



//5. 

let frase = "What is Lorem Ipsum?";

let contagem = frase.split(" ").length

console.log(`A frase tem ${contagem} palavras.\n`);



//6. 

let fatorial = 12;

let resultado = 1;

for (let i = fatorial; i >= 1; i--) {

  resultado *= i;

}



console.log(`O resultado do cálculo é ${resultado}`);



//7. 

let produto1 = 2.50

let produto2 = 3.75

let produto3 = 1.99

let valor = produto1 + produto2 + produto3;

console.log(`\nO valor da compra foi R$${valor}.\n`);



//8. 

let atraso = 7

let multa = 0.50

let multaTotal = (atraso * multa).toFixed(2)

console.log(`O valor da multa por atrasar ${atraso} dias é de R$${multaTotal}.\n`)



//9. 

let dano = 20

let vida = 100

let hits = 3

let vidaSobrando = vida - (dano * hits)

console.log(`Depois de levar ${hits} golpes o HP restante é de ${vidaSobrando} pontos.\n`);



//10. 

let frase10 = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

let count = (frase10.match(/[A-Z]/g) || []).length;

console.log(`Existem ${count} letras maiusculas na frase.`);



//11.

function calcularIdade(dataNascimento) {

  let hoje = new Date();

  let nascimento = new Date(dataNascimento);

  return hoje.getFullYear() - nascimento.getFullYear();

}

  let data = calcularIdade("2002-07-05")

console.log(`Você tem ${data} anos.`);
