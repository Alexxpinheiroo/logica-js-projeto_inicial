alert('Boas vindas ao jogo do Numero Secreto !');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto);
let chute 
let tentativas = 1;

// Enquanto chute não for igual n.s.
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
             alert (`O número secreto é menor que ${chute}`);
        } else {
             alert(`O número secreto é maior que ${chute}`);
        }
         // tentativas = tentativas + 1;
         tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`)
