alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 200; // definido essaa variável para simplificar qualquer alteração no valor, pois fica centralizado
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto o chute não for igual o número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto ){
        break;
     }else {
         if (chute > numeroSecreto){
             alert(`O número secreto é menor que ${chute}`);
         }else{
             alert(`O número secreto é maior que ${chute}`);
         }
         //tentativas = tentativas + 1;
         tentativas ++;
     }
}

//OPERADOR TERNÁRIO : Valida se a tentativa > 1. se sim, exibe no plural, caso não, exibe singular - Alternativa ao if abaixo
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
// }else{
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`);
// }

//================================================================================================================================
// EXERCÍCIOS REALIZADOS DURANTE O CURSO===========================================================================================

// alert('Boas vindas ao nosso site!')
// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemDeErro = ('Erro! Prrencha todos os campos');
// alert(mensagemDeErro);
// let nomeDigitado = prompt('Qual seu nome?');
// let idadeDigitada = prompt('Qual sua idade?');
// if ( idadeDigitada >= 18 ){
//     alert('Pode tirar a habilitação!')
// }


// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.~
// var numero = parseFloat(prompt("Digite um número:"));


// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }

//Laço de repetição
//Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }
//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
// let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

// while (numeroMaximo >= 0) {
//     console.log(numeroMaximo);
//     numeroMaximo--;
// }

//OPERADOR AND
// let idade = 25;
// let possuiCarteira = true;

// // se idade é maior que 18 e possui carteira…
// if (idade > 18 && possuiCarteira) {
//   console.log("Pode dirigir!");
// } else {
//   console.log("Não pode dirigir.");
// }

//OPERADOR OR
// let temMaça = false;
// let temBanana = true;

// // se tem maça ou tem banana…
// if (temMaça || temBanana) {
//   console.log("Você tem frutas!");
// } else {
//   console.log("Não tem frutas.");
// }


//EVOLUÇÃO DO PROJETO=======================================================================
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = documentt.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// Basicamente, os 2 códigos são iguais, é uma boa prática utilizar a função para reaproveitar
// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numberSecret = gerarNumeroAleatorio();
// let qtdTentativas = 1;


// function exibirTextoNaTela(tag, texto) {
//     let campo = documentt.querySelector(tag);
//     campo.innerHTML = texto;
//     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
// }
// function exibirMensagemInicial() {
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// }
// exibirMensagemInicial();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
    
//     if (chute == numberSecret){
//         exibirTextoNaTela('h1', 'Acertou!');
//         let regraPalavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${qtdTentativas} ${regraPalavraTentativa}!`;

//         exibirTextoNaTela('p', mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }else{
//         if (chute > numberSecret){
//             exibirTextoNaTela('p', 'O número secreto é menor');
//         }else {
//             exibirTextoNaTela('p', 'O número secreto é maior');
//         }
//         qtdTentativas ++;
//         limparCampo();
//     }
// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
//     if(quantidadeDeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }

//     if(listaDeNumerosSorteados.includes(numeroEscolhido)){ // includes valida se o item já existe na lista
//         return gerarNumeroAleatorio();
//     }else{
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numberSecret = gerarNumeroAleatorio();
//     limparCampo();
//     qtdTentativas = 1;
//     exibirMensagemInicial();

//     document.getElementById('reiniciar').setAttribute('disabled', true);
// }